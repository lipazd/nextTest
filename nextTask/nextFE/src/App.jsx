import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
