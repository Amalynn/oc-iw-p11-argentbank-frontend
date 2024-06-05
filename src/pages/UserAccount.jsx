import AccountCard from '../components/AccountCard';

export default function UserAccount() {
    return (
        <main className="main bg-dark">
            <AccountCard
                title="Argent Bank Checking (x8349)"
                amount="2,082.79"
                amountDescription="Available Balance"
            />
            <AccountCard
                title="Argent Bank Savings (x6712)"
                amount="10,928.42"
                amountDescription="Available Balance"
            />
            <AccountCard
                title="Argent Bank Credit Card (x8349)"
                amount="184.30"
                amountDescription="Current Balance"
            />
        </main>
    );
}
