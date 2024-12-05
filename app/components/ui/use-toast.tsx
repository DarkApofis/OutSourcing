// This is a simplified version. You might want to implement a full toast component for production use.
export const toast = ({ title, description }: { title: string; description: string }) => {
    console.log(`Toast: ${title} - ${description}`);
    // In a real implementation, this would show a toast notification to the user
  }
