import { Header, Footer } from '../components/Layout'

const UPDATED = 'November 17, 2026'

export default function Privacy() {
  return (
    <>
      <Header current={-1} />
      <main id="top" className="gutter">
        <article className="max-w-3xl mx-auto py-12 sm:py-16">
          <p className="eyebrow text-xs font-bold text-red">Last updated {UPDATED}</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl mt-2 tracking-tight">Privacy Policy</h1>
          <p className="mt-5 text-lg text-muted">
            HangulEasy is a free site for learning Korean. You can use every lesson without an account. This page explains what happens if you choose to sign in with Google.
          </p>

          <div className="mt-10 space-y-8 [&_h2]:font-display [&_h2]:font-extrabold [&_h2]:text-2xl [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1">
            <section>
              <h2>What we receive</h2>
              <p>When you sign in with Google, Google shares only your basic profile with us:</p>
              <ul>
                <li>your name</li>
                <li>your email address</li>
                <li>your profile picture</li>
                <li>an account ID that Google gives to our site</li>
              </ul>
              <p>We never see your Google password, and we do not ask for access to your Gmail, Drive, contacts or any other Google data.</p>
            </section>

            <section>
              <h2>How we use it</h2>
              <p>We use this information only to show that you are signed in, for example your name and picture in the top menu.</p>
            </section>

            <section>
              <h2>Where it is stored</h2>
              <p>
                We do not keep a database of users. Your profile is saved in a secure, signed cookie in your own browser so you stay signed in for up to 30 days. Signing out deletes this cookie immediately.
              </p>
            </section>

            <section>
              <h2>Sharing</h2>
              <p>We do not sell, rent or share your information with anyone. The site runs on Cloudflare, which processes web requests to deliver the pages.</p>
            </section>

            <section>
              <h2>Your choices</h2>
              <ul>
                <li>Use the site without signing in. All lessons stay free and open.</li>
                <li>Sign out at any time from the menu under your profile picture.</li>
                <li>
                  Remove HangulEasy’s access from your Google Account at{' '}
                  <a className="text-blue underline" href="https://myaccount.google.com/connections">myaccount.google.com/connections</a>.
                </li>
              </ul>
            </section>

            <section>
              <h2>Changes</h2>
              <p>If we add features that store more information, such as saving your lesson progress, we will update this page first.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
