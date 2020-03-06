import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/airbnb.css'
import Recaptcha from 'react-google-recaptcha'

import { media } from '../styles/tools'

import SEO from '../components/SEO'
import ButtonLink from '../components/ButtonLink'
import { AutoSlide, AutoFade } from '../components/Animated'

import litSignetBlack from '../assets/lit-signet-black.png'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const ContactForm = () => {
  const recaptchaRef = useRef()

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventDate: '',
        eventLocation: '',
        eventTopic: '',
        message: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string(),
        email: Yup.string()
          .email()
          .required(),
        phone: Yup.string().required(),
        eventDate: Yup.string(),
        eventLocation: Yup.string(),
        eventTopic: Yup.string(),
        message: Yup.string(),
      })}
      onSubmit={(formData, { setStatus }) => {
        const recaptchaValue = recaptchaRef.current.getValue()

        if (!recaptchaValue) {
          return alert('Please complete Google ReCaptcha verification below')
        }

        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: encode({
            'form-name': 'contact',
            'g-recaptcha-response': recaptchaValue,
            ...formData,
          }),
        })
          .then(() => setStatus({ sent: true }))
          .catch(() => setStatus({ sent: false }))
      }}
    >
      {({
        values,
        errors,
        touched,
        status: { sent } = {},
        handleChange,
        handleBlur,
      }) => (
        <Form
          name="contact"
          data-netlify="true"
          data-netlify-recaptcha="true"
          className="h-full"
        >
          {sent ? (
            <div className="flex flex-col justify-center items-center h-full">
              <img src={litSignetBlack} alt="Logo" className="w-64 mb-10" />
              <div
                className="font-display leading-none uppercase text-center"
                css={{ fontSize: '3.2vw' }}
              >
                THANK YOU!
              </div>
              <div className="mt-2 leading-loose text-gray-600  text-center">
                We’received your message and will be in touch shortly!
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap -m-4">
              <noscript className="w-full px-4 py-2">
                <p>This form won’t work with Javascript disabled</p>
              </noscript>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <label
                  htmlFor="firstName"
                  className="block mb-2 leading-loose text-gray-600"
                >
                  First Name*
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  className="block w-full p-4 text-lg text-gray-900 border border-solid border-gray-400 focus:border-gray-800 outline-none appearance-none rounded-none"
                  css={
                    touched.firstName &&
                    errors.firstName && { borderColor: 'red' }
                  }
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <label
                  htmlFor="lastName"
                  className="block mb-2 leading-loose text-gray-600"
                >
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  className="block w-full p-4 text-lg text-gray-900 border border-solid border-gray-400 focus:border-gray-800 outline-none appearance-none rounded-none"
                  css={
                    touched.lastName &&
                    errors.lastName && { borderColor: 'red' }
                  }
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <label
                  htmlFor="eventDate"
                  className="block mb-2 leading-loose text-gray-600"
                >
                  Event Date
                </label>
                <div className="flex items-center">
                  <svg
                    viewBox="0 0 48 47"
                    className="w-6 h-6 ml-4 -mr-10 relative fill-current pointer-events-none"
                  >
                    <path d="M47 4.3h-5.8V0h-2v4.3h-4.6V0h-2v4.3H15.4V0h-2v4.3H8.8V0h-2v4.3H1c-.6 0-1 .4-1 1V46c0 .6.4 1 1 1h46c.6 0 1-.4 1-1V5.3c0-.6-.4-1-1-1zm-40.2 2v3.2h2V6.3h4.6v3.2h2V6.3h17.2v3.2h2V6.3h4.6v3.2h2V6.3H46v6.6H2V6.3h4.8zM2 45V14.9h44V45H2z" />
                    <path d="M11.3 18.2H6.6c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1v-4.7c0-.6-.4-1-1-1zm-1 4.7H7.6v-2.7h2.7v2.7z" />
                    <path d="M21.4 18.2h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1v-4.7c0-.6-.4-1-1-1zm-1 4.7h-2.7v-2.7h2.7v2.7z" />
                    <path d="M31.4 18.2h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1v-4.7c0-.6-.4-1-1-1zm-1 4.7h-2.7v-2.7h2.7v2.7z" />
                    <path d="M41.4 18.2h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1v-4.7c0-.6-.4-1-1-1zm-1 4.7h-2.7v-2.7h2.7v2.7z" />
                    <path d="M11.3 27H6.6c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1V28c0-.6-.4-1-1-1zm-1 4.7H7.6V29h2.7v2.7z" />
                    <path d="M21.4 27h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1V28c0-.6-.4-1-1-1zm-1 4.7h-2.7V29h2.7v2.7z" />
                    <path d="M31.4 27h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1V28c0-.6-.4-1-1-1zm-1 4.7h-2.7V29h2.7v2.7z" />
                    <path d="M41.4 27h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1V28c0-.6-.4-1-1-1zm-1 4.7h-2.7V29h2.7v2.7z" />
                    <path d="M11.3 35.8H6.6c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1v-4.7c0-.6-.4-1-1-1zm-1 4.7H7.6v-2.7h2.7v2.7z" />
                    <path d="M21.4 35.8h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1v-4.7c0-.6-.4-1-1-1zm-1 4.7h-2.7v-2.7h2.7v2.7z" />
                    <path d="M31.4 35.8h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1v-4.7c0-.6-.4-1-1-1zm-1 4.7h-2.7v-2.7h2.7v2.7z" />
                    <path d="M41.4 35.8h-4.7c-.6 0-1 .4-1 1v4.7c0 .6.4 1 1 1h4.7c.6 0 1-.4 1-1v-4.7c0-.6-.4-1-1-1zm-1 4.7h-2.7v-2.7h2.7v2.7z" />
                  </svg>
                  <Flatpickr
                    options={{
                      enableTime: true,
                      minDate: 'today',
                      dateFormat: 'F j, Y H:i',
                    }}
                    id="eventDate"
                    name="eventDate"
                    type="text"
                    value={values.eventDate}
                    onChange={value => {
                      // console.log(value)
                      handleChange({
                        target: {
                          value: value[0],
                          type: 'text',
                          name: 'eventDate',
                          id: 'eventDate',
                        },
                      })
                    }}
                    onBlur={handleBlur}
                    className="block w-full p-4 pl-12 text-lg text-gray-900 border border-solid border-gray-400 focus:border-gray-800 outline-none appearance-none rounded-none"
                    css={
                      touched.eventDate &&
                      errors.eventDate && { borderColor: 'red' }
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <label
                  htmlFor="eventLocation"
                  className="block mb-2 leading-loose text-gray-600"
                >
                  Event Location
                </label>
                <Field
                  id="eventLocation"
                  name="eventLocation"
                  className="block w-full p-4 text-lg text-gray-900 border border-solid border-gray-400 focus:border-gray-800 outline-none appearance-none rounded-none"
                  css={
                    touched.eventLocation &&
                    errors.eventLocation && { borderColor: 'red' }
                  }
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <label
                  htmlFor="email"
                  className="block mb-2 leading-loose text-gray-600"
                >
                  E-mail*
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full p-4 text-lg text-gray-900 border border-solid border-gray-400 focus:border-gray-800 outline-none appearance-none rounded-none"
                  css={touched.email && errors.email && { borderColor: 'red' }}
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <label
                  htmlFor="phone"
                  className="block mb-2 leading-loose text-gray-600"
                >
                  Phone*
                </label>
                <Field
                  id="phone"
                  name="phone"
                  className="block w-full p-4 text-lg text-gray-900 border border-solid border-gray-400 focus:border-gray-800 outline-none appearance-none rounded-none"
                  css={touched.phone && errors.phone && { borderColor: 'red' }}
                />
              </div>
              <div className="w-full px-4 py-2">
                <label
                  htmlFor="eventTopic"
                  className="block mb-2 leading-loose text-gray-600"
                >
                  Inquiry about a Keynote Topic
                </label>
                <div className="relative">
                  <Field
                    as="select"
                    id="eventTopic"
                    name="eventTopic"
                    className="block w-full p-4 text-lg text-gray-900 border border-solid border-gray-400 focus:border-gray-800 outline-none appearance-none rounded-none rounded-none bg-transparent"
                    css={
                      touched.topic && errors.topic && { borderColor: 'red' }
                    }
                  >
                    <option disabled value="" selected>
                      Select Keynote Topic
                    </option>
                    <option value="THE RHYTHM OF SUCCESS">
                      THE RHYTHM OF SUCCESS
                    </option>
                    <option value="THE MUSIC OF LEADERSHIP">
                      THE MUSIC OF LEADERSHIP
                    </option>
                    <option value="RESOLVING DISRUPTION">
                      RESOLVING DISRUPTION
                    </option>
                    <option value="TEAMWORK">TEAMWORK</option>
                    <option value="MASTER OF CEREMONIES">
                      MASTER OF CEREMONIES
                    </option>
                    <option value="WORKSHOPS / BREAKOUT SESSIONS">
                      WORKSHOPS / BREAKOUT SESSIONS
                    </option>
                  </Field>
                  <div className="flex justify-center items-center w-16 h-full absolute top-0 right-0 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      viewBox="0 0 15.924 8.492"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0.75,0.75l7.212,7.212l7.212-7.212" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 py-2">
                <label
                  htmlFor="message"
                  className="block mb-2 leading-loose text-gray-600"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="block w-full h-32 lg:h-48 p-4 font-bold text-gray-900 border border-solid border-gray-400 focus:border-gray-800 outline-none appearance-none rounded-none"
                  css={
                    touched.message && errors.message && { borderColor: 'red' }
                  }
                />
              </div>
              <div className="w-full px-4 py-2 overflow-hidden">
                <Recaptcha
                  ref={recaptchaRef}
                  sitekey={process.env.SITE_RECAPTCHA_KEY || 'test'}
                  className="overflow-hidden mt-2"
                  css={{ [media.max.tablet]: { maxWidth: 270 } }}
                />
              </div>
              <ButtonLink as="button" type="submit" className="m-4">
                Submit
              </ButtonLink>
            </div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export const query = graphql`
  query {
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    contact: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Contact" />
    <section
      className="pt-10 pb-20 text-white"
      css={{ backgroundColor: '#1b1b1b' }}
    >
      <div
        css={{
          display: 'grid',
          '--space': '20px',
          gridTemplateColumns: 'var(--space) 1fr var(--space)',
          [media.laptop]: {
            '--space': '13vw',
          },
        }}
      >
        <AutoFade
          duration={3000}
          css={{ gridRow: 1, gridColumn: '1 / -1', zIndex: 1 }}
        >
          <Img
            fluid={data.waves.childImageSharp.fluid}
            className="w-full self-start select-none"
          />
        </AutoFade>
        <AutoSlide
          up
          delay={300}
          css={{
            gridRow: 1,
            gridColumn: '2 / -2',
            zIndex: 3,
            marginTop: '13.5vw',
          }}
        >
          <header className="flex justify-center px-6 py-6 lg:py-12 bg-black">
            <h3
              className="relative font-display font-hairline text-lg sm:text-3xl text-gold-500 leading-tight text-center uppercase"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Inspire and Transform Your Audience
            </h3>
          </header>
          <div className="bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row -m-6 p-5 md:p-10 text-gray-900">
              <div className="md:w-1/3 m-6">
                <p css={{ maxWidth: '16em' }}>
                  To Contact or Book Freddie, send a message or contact:
                </p>
                {/* <p className="mt-5">
                  Freddie Ravel
                  <br />
                  22287 Mulholland Hwy Suite 516
                  <br />
                  Calabasas, CA 91302 USA
                </p> */}
                <a className="block mt-5" href="tel:1-857-267-3669">
                  Phone: +1-857-267-3669
                </a>
                <a
                  className="block mt-5"
                  href="mailto:manager@freddieravel.com"
                >
                  Email: manager@freddieravel.com
                </a>
                <Img
                  fluid={data.contact.childImageSharp.fluid}
                  className="hidden md:block mt-10"
                />
              </div>
              <div className="md:w-2/3 m-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </AutoSlide>
      </div>
    </section>
  </>
)

export default IndexPage
