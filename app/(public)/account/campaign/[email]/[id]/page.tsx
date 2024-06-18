// pages/redirect.js
import { testuser } from '@/lib/data';
import Login from "./components/login"
const RedirectPage = async({
  params
}: {
  params: { email: string, id:string };
}) => {

  const user = await testuser();
  
  const email = atob(decodeURIComponent(params.email));
  const id = params.id;
  return (
    <>
      <Login campaign_id={params.id} email={email} />
    </>
  )
};


export default RedirectPage;
