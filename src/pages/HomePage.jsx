import HomepageCard from '../components/HomepageCard';
import IconChat from '../assets/icons/icon-chat.png';
import IconMoney from '../assets/icons/icon-money.png';
import IconSecurity from '../assets/icons/icon-security.png';

export default function HomePage() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <HomepageCard
                srcImage={IconChat}
                altText="Chat icon"
                title="You are our #1 priority"
                description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
            />
            <HomepageCard
                srcImage={IconMoney}
                altText="Money icon"
                title="More savings means higher rates"
                description="The more you save with us, the higher your interest rate will be!"
            />
            <HomepageCard
                srcImage={IconSecurity}
                altText="Security icon"
                title="Security you can trust"
                description="We use top of the line encryption to make sure your data and money
                is always safe."
            />
        </section>
    );
}
