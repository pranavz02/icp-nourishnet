import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import HOST from '../utils/Host.js'
import { logo } from '../assets/main.js'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { loginButton } from '../main.js'
import hello_backend from '../../../declarations/hello_backend'

const Login = () => {
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') setEmail(value)
    // else if (name === "password") setPassword(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await loginButton(e)

      if (response) {
        console.log('Login successful!')

        // Display toast before redirecting
        toast.success('Login successful!', {
          position: 'top-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

        setTimeout(() => {
          // Redirect after showing the toast
          if (email === 'pranav@gmail.com') navigate('/dashboard')
          else if (email === 'ngo@gmail.com') navigate('/ngodashboard')
        }, 2000) // Adjust the timing if needed
      }
    } catch (error) {
      console.error(error)
      toast.error('Login failed. Please check your credentials.', {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <section className='bg-gray-100 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto   md:h-screen lg:py-0'>
        <a
          href='#'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <img
            src={logo}
            className='mr-3 mt-[3rem] h-12 sm:h-20'
            alt='Flowbite Logo'
          />
        </a>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-8 space-y-4 md:space-y-6 sm:p-8 pb-18 '>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={handleSubmit}
              action='#'
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  id='email'
                  className='bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#eda277]focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      required
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='remember'
                      className='text-gray-500 dark:text-gray-300'
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href='#'
                  className='text-sm font-medium text-[#eda277]hover:underline dark:text-primary-500'
                >
                  Forgot password?
                </a>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-[#eda277]
                hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Sign in
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don’t have an account yet?{' '}
                <a
                  href='/joinUs'
                  className='font-medium 
                  text-[#eda277] hover:underline dark:text-primary-500'
                >
                  Join Us
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Login
