import PageHeader from '@/components/shared/PageHeader';
import ChallengesList from './components/ChallengesList';

export default function challenges() {
  return (
    <main className="bg-white min-h-screen">
      <PageHeader 
        title="Healthcare Challenges"
        description="MedYour is dedicated to addressing significant challenges in the <br /> healthcare landscape"
      />
      <ChallengesList />
    </main>
  );
}