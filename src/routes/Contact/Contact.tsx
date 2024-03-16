import Link from '../../components/Link/Link';

export default function Contact() {
  const pageName = 'Contact';

  return (
    <>
      <h1>{pageName}</h1>

      <h2>LinkedIn</h2>
      <p>
        <Link
          href='https://www.linkedin.com/in/mizamberarmstrong'
          external
          type='body'
        >
          mizamberarmstrong
        </Link>
      </p>
      <hr aria-hidden='true' />
      <h2>GitHub</h2>
      <p>
        <Link href='https://github.com/amberfrontend' external type='body'>
          amberfrontend
        </Link>
      </p>
    </>
  );
}
