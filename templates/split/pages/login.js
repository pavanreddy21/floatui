import Head from "next/head";
import Brand from "../components/ui/Brand";

import { SignedIn, UserProfile, SignIn, SignedOut } from '@clerk/nextjs'

export default function index() {
  return (
    <>
      <SignedIn>
        <UserProfile />
      </SignedIn>

      <SignedOut>
        <Head>
          <meta name='robots' content='index' />
          <title>Login - Split</title>
        </Head>

        <div className='w-full h-screen flex flex-col items-center justify-center px-4'>
          <div className='max-w-sm w-full text-gray-600'>
            <div className='text-center'>
              <Brand className='mx-auto' />
            </div>

            <SignIn />
          </div>
        </div>

      </SignedOut>
    </>
  );
}
