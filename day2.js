const gameStringToCubesMap = (gameDescription) => {
    return gameDescription
      .split(": ")[1]
      .split(";")
      .map((game) => {
        const gameMap = {};
        const cubes = game.split(",");
        cubes.forEach((cube) => {
          const [count, color] = cube.trim().split(" ");
          gameMap[color] = Number(count);
        });
        return gameMap;
      });
  };
  
  const isGameValid = (gameMap) => {
    const maxValidCubes = {
      red: 12,
      green: 13,
      blue: 14,
    };
    return gameMap.every((gameSet) => {
      return Object.keys(gameSet).every((color) => {
        return gameSet[color] <= maxValidCubes[color];
      });
    });
  };
  
  const leastCubesProduct = (gameMap) => {
    const minCubesMap = {};
    gameMap.forEach((gameSet) => {
      Object.entries(gameSet).forEach(([color, cubeCount]) => {
        minCubesMap[color] = Math.max(minCubesMap[color] || 0, cubeCount);
      });
    });
  
    return Object.values(minCubesMap).reduce((product, cubeCount) => {
      return product * cubeCount;
    }, 1);
  };
  
  // round 1
  const getSumOfPossibleOutcomes = (input) =>
    input.split("\n").reduce((sum, game, idx) => {
      if (!isGameValid(gameStringToCubesMap(game))) {
        return sum;
      } else {
        return (sum += idx + 1);
      }
    }, 0);
  
  // round 2
  const getSumOfMinCubesProduct = (input) =>
    input.split("\n").reduce((sum, game) => {
      return (sum += leastCubesProduct(gameStringToCubesMap(game)));
    }, 0);
  