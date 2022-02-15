import GithubLink from '../GithubLink';
import TwitterLink from '../TwitterLink';

type Contact = {
  id: number;
  name: string;
  url: string;
};

const LinkSelector = (contact: Contact) => {
  console.log(contact);
  if (contact.name === 'github') {
    return <GithubLink url={contact.url} />;
  } else {
    console.log('hogehoge');
    return <TwitterLink url={contact.url} />;
  }
};

export const Contact: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold">Contact</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        {contacts.map((contact) => LinkSelector(contact))}
      </div>
    </div>
  );
};
