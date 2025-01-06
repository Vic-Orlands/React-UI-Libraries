import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const features = {
    "Material UI": {
      components: 95,
      customization: 90,
      documentation: 95,
      ecosystem: 90,
      features: [
        { name: "Theme Customization", available: true },
        { name: "Server Components", available: true },
        { name: "TypeScript Support", available: true },
        { name: "SSR Support", available: true },
        { name: "RTL Support", available: true },
      ],
      installation: "npm install @mui/material @emotion/react @emotion/styled",
      examples: [
        <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
      ],
    },
    // Add other libraries here
  };
