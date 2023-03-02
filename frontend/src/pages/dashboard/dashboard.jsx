

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
      <section className="container">
        <div className='container'>
          <Alert type="success">
            <p>To join the Empowered blockchain Firm Telegram channel - <a href="#">click here</a></p>
          </Alert>
          <section className="">
            something is going to happen in the next three days
          </section>
        </div>
      </section>
    </>
  );
}

export default Dashboard