import {BrowserRouter , Routes , Route} from "react-router-dom";
import { BizumTransferPage } from "./components/BizumTransferPage/BizumTransferPage";
import { CardDetails } from "./components/CardDetails/CardDetails";
import { CardSecret } from "./components/CardSecret/CardSecret";
import { CardsPage } from "./components/CardsPage/CardsPage";
import { ExpensesPage } from "./components/ExpensesPage/ExpensesPage";
import { HomePage } from "./components/HomePage/HomePage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import MyCards from "./components/MyCards/MyCards";
import { NewCardForm } from "./components/NewCardForm/NewCardForm";
import { ProfileData } from "./components/ProfileData/ProfileData";
import { ProfileImage } from "./components/ProfileImage/ProfileImage";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { RecordsPage } from "./components/RecordsPage/RecordsPage";
import { SigninForm } from "./components/SigninForm/SigninForm";
import { SignupForm } from "./components/SignupForm/SignupForm";
import { TransactionFailure } from "./components/TransactionFailure/TransactionFailure";
import TransactionResult from "./components/TransactionResult/TransactionResult";
import { TransactionSuccess } from "./components/TransactionSuccess/TransactionSuccess";
import { TransferPage } from "./components/TransferPage/TransferPage"; 
import UserProvider from "./context/UserProvider";


export default function App() {
  
  const context = true
  return (
    <div className="bg-black min-h-screen pt-[40px] px-[28px] pb-28">

      <UserProvider> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <LoginPage /> } />
            <Route path="/auth/signin" element={ <SigninForm /> } />
            <Route path="/auth/signup" element={ <SignupForm /> } />
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/records" element={ <RecordsPage /> } />
            <Route path="/records/expense" element={ <ExpensesPage /> } />
            <Route path="/cards" element={ <CardsPage />} />
            <Route path="/cards/details" element={ <CardDetails /> } />
            <Route path="/cards/new" element={ <NewCardForm /> } />
            <Route path="/cards/secret" element={ <CardSecret /> } />
            <Route path="/profile" element={ <ProfilePage /> } />
            <Route path="/profile/image" element={ <ProfileImage /> } />
            <Route path="/profile/data" element={ <ProfileData /> } />
            <Route path="/transactions/transfer" element={<TransferPage />}/>
            <Route path="/transactions/bizum" element={ <BizumTransferPage />} />
            <Route path="/transactions/result/:state" element={ <TransactionResult />} />
            {/* <Route path="/transactions/result" element={ <TransactionSuccess />} /> */}
            {/* <Route path="/auth" element={ <LoginPage /> }>
              <Route path="signup" element={ <SignupForm />} />
              <Route path="signin" element={ } />
            </Route>
<<<<<<< HEAD
            <Route path="/records" element={ <RecordsPage />}>
              <Route path="expenses" element={ <ExpensesPage />} />
            </Route>
            <Route path="/cards" element={ <CardsPage />}>
              <Route path="details" element={ <CardDetails />} />
              <Route path="new" element={ <NewCardForm />} />
              <Route path="secret" element={ <CardSecret />} />
            </Route>
=======
>>>>>>> bc479e34536ff49f3ff4d5f05ba877fb5bf08009
            <Route path="/profile" element={<ProfileMenu />}>
              <Route path="image" element={ <ProfileImage />} />
              <Route path="data" element={ <ProfileData />} />
            </Route> */}
          </Routes>
        </BrowserRouter> 
      </UserProvider>
    </div>
  );
}
