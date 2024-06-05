import AccountCard from '../components/AccountCard/AccountCard.jsx';
import ContentAccountCard from '../components/AccountCard/ContentAccountCard.jsx';
import { BUTTON_TYPES } from '../components/Button.jsx';
import Button from '../components/Button.jsx';

export default function UserAccount() {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis!
                </h1>
                <Button type={BUTTON_TYPES.DEFAULT} className="edit-button">
                    Edit Name
                </Button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountCard>
                <ContentAccountCard
                    title="Argent Bank Checking (x8349)"
                    amount="2,082.79"
                    amountDescription="Available Balance"
                />
                <div className="account-content-wrapper cta">
                    <Button
                        type={BUTTON_TYPES.DEFAULT}
                        className="transaction-button"
                    >
                        View transactions
                    </Button>
                </div>
            </AccountCard>

            <AccountCard>
                <ContentAccountCard
                    title="Argent Bank Savings (x6712)"
                    amount="10,928.42"
                    amountDescription="Available Balance"
                />
                <Button
                    type={BUTTON_TYPES.DEFAULT}
                    className="transaction-button"
                >
                    View transactions
                </Button>
            </AccountCard>

            <AccountCard>
                <ContentAccountCard
                    title="Argent Bank Credit Card (x8349)"
                    amount="184.30"
                    amountDescription="Current Balance"
                />
                <Button
                    type={BUTTON_TYPES.DEFAULT}
                    className="transaction-button"
                >
                    View transactions
                </Button>
            </AccountCard>
        </main>
    );
}
