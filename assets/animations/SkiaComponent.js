import React, { useState, useEffect, useCallback } from 'react';
import { View, Dimensions, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { Canvas, useCanvasRef } from '@shopify/react-native-skia';

const SkiaComponent = () => {
  const canvasRef = useCanvasRef();
  const imageSize = 70; // Tamanho da imagem do símbolo do Bitcoin
  const { width, height } = Dimensions.get('window');

  // Função para gerar círculos
  const generateCircles = useCallback(() => {
    const circlesArray = [];
    const numberOfCircles = 6; // Ajuste o número de círculos conforme necessário
    
    for (let i = 0; i < numberOfCircles; i++) {
      const x = Math.random() * (width - imageSize) + imageSize / 2;
      const y = Math.random() * (height - imageSize) + imageSize / 2;

      circlesArray.push({
        id: i + 1,
        x,
        y,
        velocityX: (Math.random() * 4) - 2, // Velocidade X aleatória
        velocityY: (Math.random() * 4) - 2, // Velocidade Y aleatória
        rotation: Math.random() * 360, // Rotação inicial aleatória
      });
    }

    return circlesArray;
  }, [width, height]);

  const [circles, setCircles] = useState(generateCircles);

  useEffect(() => {
    setCircles(generateCircles());
  }, [width, height, generateCircles]);

  const checkCollision = useCallback((circle1, circle2) => {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= imageSize;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prevCircles) => {
        const newCircles = prevCircles.map((circle) => {
          let newX = circle.x + circle.velocityX;
          let newY = circle.y + circle.velocityY;
          let newRotation = (circle.rotation + 2) % 360;

          // Verificar colisão com as bordas e reverter a direção, se necessário
          if (newX - imageSize / 2 < 0 || newX + imageSize / 2 > width) {
            circle.velocityX = -circle.velocityX;
            newX = Math.max(imageSize / 2, Math.min(width - imageSize / 2, newX));
          }

          if (newY - imageSize / 2 < 0 || newY * 1.1 + imageSize / 2 > height) {
            circle.velocityY = -circle.velocityY;
            newY = Math.max(imageSize / 2, Math.min(height - imageSize / 2, newY));
          }

          return { ...circle, x: newX, y: newY, rotation: newRotation };
        });

        // Verificar colisões entre os círculos
        for (let i = 0; i < newCircles.length; i++) {
          for (let j = i + 1; j < newCircles.length; j++) {
            if (checkCollision(newCircles[i], newCircles[j])) {
              const dx = newCircles[j].x - newCircles[i].x;
              const dy = newCircles[j].y - newCircles[i].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const overlap = imageSize - distance;

              const moveX = (dx / distance) * overlap / 2;
              const moveY = (dy / distance) * overlap / 2;

              newCircles[i].x -= moveX;
              newCircles[i].y -= moveY;
              newCircles[j].x += moveX;
              newCircles[j].y += moveY;

              [newCircles[i].velocityX, newCircles[j].velocityX] = [newCircles[j].velocityX, newCircles[i].velocityX];
              [newCircles[i].velocityY, newCircles[j].velocityY] = [newCircles[j].velocityY, newCircles[i].velocityY];
            }
          }
        }

        return newCircles; // Retorna a nova lista de círculos
      });
    }, 16); // Aproximadamente 60 FPS

    return () => clearInterval(interval);
  }, [width, height, checkCollision]);

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Canvas style={styles.canvas} ref={canvasRef}>
        </Canvas>
        {circles.map((circle) => (
          <Image
            key={`img-${circle.id}`}
            source={require('./Bitcoin.png')}
            style={[
              styles.image,
              {
                left: circle.x - imageSize / 2,
                top: circle.y - imageSize / 2,
                width: imageSize,
                height: imageSize,
                transform: [{ rotate: `${circle.rotation}deg` }],
              }
            ]}
          />
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    zIndex: -1,
    marginBottom: -100
  },
  canvas: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    position: 'absolute',
  },
});

export default SkiaComponent;