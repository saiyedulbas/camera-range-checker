import * as readline from 'readline';

type Camera = {
  distanceRange: [number, number];
  lightLevelRange: [number, number];
};

function canCoverRange(
  desiredDistanceRange: [number, number],
  desiredLightLevelRange: [number, number],
  cameras: Camera[]
): boolean {
  let distanceCovered: number[] = [];
  let lightLevelCovered: number[] = [];

  // Mark which distances and light levels are covered
  for (const camera of cameras) {
    for (let d = camera.distanceRange[0]; d <= camera.distanceRange[1]; d++) {
      distanceCovered[d] = 1;
    }
    for (let l = camera.lightLevelRange[0]; l <= camera.lightLevelRange[1]; l++) {
      lightLevelCovered[l] = 1;
    }
  }

  // Check if all required distances are covered
  for (let d = desiredDistanceRange[0]; d <= desiredDistanceRange[1]; d++) {
    if (!distanceCovered[d]) {
      return false;
    }
  }

  // Check if all required light levels are covered
  for (let l = desiredLightLevelRange[0]; l <= desiredLightLevelRange[1]; l++) {
    if (!lightLevelCovered[l]) {
      return false;
    }
  }

  return true;
}

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to ask questions
const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => rl.question(question, resolve));
};

async function main() {
  // Get user input for the desired ranges
  const desiredDistanceRange = await askQuestion('Enter the desired distance range (e.g., 1,10): ');
  const [minDistance, maxDistance] = desiredDistanceRange.split(',').map(Number);

  const desiredLightLevelRange = await askQuestion('Enter the desired light level range (e.g., 1,5): ');
  const [minLightLevel, maxLightLevel] = desiredLightLevelRange.split(',').map(Number);

  // Get user input for cameras
  const cameraCount = await askQuestion('How many cameras do you want to input? ');
  const cameras: Camera[] = [];

  for (let i = 0; i < parseInt(cameraCount); i++) {
    const cameraDistanceRange = await askQuestion(`Enter the distance range for camera ${i + 1} (e.g., 1,5): `);
    const [camMinDistance, camMaxDistance] = cameraDistanceRange.split(',').map(Number);

    const cameraLightLevelRange = await askQuestion(`Enter the light level range for camera ${i + 1} (e.g., 1,3): `);
    const [camMinLightLevel, camMaxLightLevel] = cameraLightLevelRange.split(',').map(Number);

    cameras.push({
      distanceRange: [camMinDistance, camMaxDistance],
      lightLevelRange: [camMinLightLevel, camMaxLightLevel]
    });
  }

  // Check if the cameras cover the desired range
  const result = canCoverRange(
    [minDistance, maxDistance],
    [minLightLevel, maxLightLevel],
    cameras
  );

  // Output the result
  if (result) {
    console.log('The cameras can cover the desired range.');
  } else {
    console.log('The cameras cannot cover the desired range.');
  }

  // Close the readline interface
  rl.close();
}

main().catch((err) => console.error(err));
