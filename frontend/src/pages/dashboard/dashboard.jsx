

// Components
import { SEO } from "../../components";
import Navigation from './components/navigation/navigation';
import Alert from './components/message/message';


function Dashboard() {
  return (
    <>
      <SEO
        title="Dashboard | Empowered Blockchain"
        description="Enrolled user dashboard"
        type="article"
      />
      <Navigation />
    </>
  );
}

export default Dashboard