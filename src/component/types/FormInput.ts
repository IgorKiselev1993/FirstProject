export interface FormInput {
  values: {
    title: string;
    status: string;
    description: string;
  };
  setValues: {
    setTitle: (title: string) => void;
    setStatus: (status: string) => void;
    setDescription: (description: string) => void;
  };
}
