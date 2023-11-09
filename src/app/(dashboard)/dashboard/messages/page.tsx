// import { getMessages } from '@/data/fetch';

export const metadata = {
  title: 'PMG Messages',
  description: 'PMG Messages',
};

const ContactMessages = async () => {
  // const messages = await getMessages();

  return (
    <section>
      <span className='font-bold text-4xl'>Messages:</span>
      {/* <div className='border-dashed  p-2 border border-zinc-500 w-full min-h-64 rounded-lg'>
        {messages.length === 0 ? (
          <p className='font-bold text-xl'>No Message Yet</p>
        ) : (
          <pre>{JSON.stringify(messages, null, 2)}</pre>
        )}
      </div> */}
    </section>
  );
};
export default ContactMessages;
