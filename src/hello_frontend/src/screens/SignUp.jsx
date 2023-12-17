import React, { useState } from 'react'
import { logo } from '../assets/main.js'
import { useParams, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import HOST from '../utils/Host.js'
import { whoAmIButton } from '../main.js'
import {hello_backend} from '../../../declarations/hello_backend'

const SignUp = () => {
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState("");
  const [name, setName] = useState('')
  const { type } = useParams()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') setEmail(value)
    // else if (name === "password") setPassword(value);
    else if (name === 'name') setName(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // if (type === 'HoReKa') {
      //   const horeka = await hello_backend.addHoReKaUser(name, email)
      // } else if (type === 'NGO') {
      //   const ngo = await hello_backend.addNGOUser(name, email)
      // }
      // const response = await whoAmIButton(e)
      const response = true;
      setTimeout(() => {}, 2000);

      if (response) {
        toast.success(
          "Your account has been created!",
          {
            position: 'top-left',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        )

        setTimeout(() => {
          // Redirect after showing the toast
          if (email === "pranav@gmail.com") navigate("/dashboard");
          else if (email === "ngo@gmail.com")
            navigate("/ngodashboard");
        }, 2000); // Adjust the timing if needed
      }
    } catch (error) {
      console.error(error)
      toast.error('Signup failed. Please check your connection.', {
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
    <section className='bg-gray-100 dark:bg-gray-900 py-20 '>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
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
          <div className='py-8  space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create an account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              action='#'
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your name
                </label>
                <input
                  type='name'
                  onChange={handleChange}
                  name='name'
                  id='name'
                  className='bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name'
                  required=''
                />
              </div>
              <div>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  onChange={handleChange}
                  name='email'
                  id='email'
                  className='bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  required=''
                />
              </div>

              {/* <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div> */}

              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded
                          ring-primary-700 bg-gray-100 focus:ring-3 focus:ring-[#eda277] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-700 dark:ring-offset-gray-800'
                    required=''
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label
                    for='terms'
                    className='font-light text-gray-500 dark:text-gray-300'
                  >
                    I accept the{' '}
                    <a
                      className='font-medium text-primary-700 hover:underline dark:text-primary-500'
                      href='#'
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-[#eda277] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Create an account
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{' '}
                <a
                  href='/login'
                  className='font-medium text-primary-700 hover:underline dark:text-primary-500'
                >
                  Login here
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

export default SignUp
