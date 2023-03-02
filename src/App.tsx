
import {BrowserRouter , Routes , Route} from "react-router-dom";
import { BizumTransferPage } from "./components/BizumTransferPage/BizumTransferPage";
import { CardDetails } from "./components/CardDetails/CardDetails";
import { CardSecret } from "./components/CardSecret/CardSecret";
import { CardsPage } from "./components/CardsPage/CardsPage";
import { ExpensesPage } from "./components/ExpensesPage/ExpensesPage";
import { HomePage } from "./components/HomePage/HomePage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { NewCardForm } from "./components/NewCardForm/NewCardForm";
import { ProfileData } from "./components/ProfileData/ProfileData";
import { ProfileImage } from "./components/ProfileImage/ProfileImage";
import { ProfileMenu } from "./components/ProfileMenu/ProfileMenu";
import { RecordsPage } from "./components/RecordsPage/RecordsPage";
import { SigninForm } from "./components/SigninForm/SigninForm";
import { SignupForm } from "./components/SignupForm/SignupForm";
import { TransactionFailure } from "./components/TransactionFailure/TransactionFailure";
import { TransactionSuccess } from "./components/TransactionSuccess/TransactionSuccess";
import { TransferPage } from "./components/TransferPage/TransferPage";

export default function App() {
  const context = true
  return (
    <div className="bg-black min-h-screen pt-[40px] px-[28px] pb-[20px]">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/auth" element={<LoginPage />}>
            <Route path="signup" element={<SignupForm />} />
            <Route path="signin" element={<SigninForm />} />
          </Route>

          <Route path="/records" element={<RecordsPage />}>
            <Route path="expenses" element={<ExpensesPage />} />
          </Route>

          <Route path="/cards" element={<CardsPage />}>
            <Route path="details" element={<CardDetails />} />
            <Route path="new" element={<NewCardForm />} />
            <Route path="secret" element={<CardSecret />} />
          </Route>

          <Route path="/transactions/transfer" element={<TransferPage />} />
          <Route path="/transactions/bizum" element={<BizumTransferPage />} />
          <Route path="/transactions/result" element={context ? <TransactionSuccess /> : <TransactionFailure />} />


          <Route path="/profile" element={<ProfileMenu />}>
            <Route path="image" element={<ProfileImage />} />
            <Route path="data" element={<ProfileData />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
