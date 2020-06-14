import React, { useState } from 'react';

const URL = '';

function fetchPost(data: object) {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

function createDefaultInputs() {
  return {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
}

function App() {
  const [isSending, setIsSending] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [inputs, setInputs] = useState(createDefaultInputs());

  function handleChangeFormValues(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    fetchPost(inputs)
      .then(res => {
        if (res.ok) {
          setIsPopupVisible(true);
          setInputs(createDefaultInputs());
        }
      })
      .finally(() => setIsSending(false));
  }

  function handleClickPopupСonfirm(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setIsPopupVisible(false);
  }

  console.log({ isLoading: isSending, isPopupVisible, inputs })

  return (

    <div style={{ outline: 'none' }} tabIndex={-1} role="group" id="gatsby-focus-wrapper">
      <div>
        <header className="header">
          <div className="header--content container"><a className="header--logo" href="#top">Madappgang</a>
            <nav className="header--menu menu "><a className="header--menu-item mobile--menu-item"
              href="#top">Main</a><a className="header--menu-item" href="#top">Services</a><a
                className="header--menu-item" href="#top">Experience</a><a className="header--menu-item"
                  href="#top">Foundation</a><a className="header--menu-item" href="#top">Team</a><a
                    className="header--menu-item" href="#top">Blog</a></nav>
            <div className="header--menu-mobile "><span></span></div><a aria-current="page"
              className="header--link link-button blue" href="#top">Get in Touch</a>
          </div>
        </header>
        <div className="page-wrapper">
          <section className="contacts-page">
            <div className="contacts-page--content container">
              <div className="contacts-page--head section--head">
                <h1 className="section--title">Get in touch</h1>
                <div className="section--subtitle">Let us know <br />how we can help</div>
              </div>
              <div className="contacts-page--body">
                <div className="contact--form-wrapper">
                  <form
                    onSubmit={handleSubmitForm}
                    className="contact--form"
                    // method="post"
                    // action="/"
                    name="getintouch"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="bot-field" />
                    <input
                      onChange={handleChangeFormValues}
                      value={inputs.name}
                      name="name"
                      type="text"
                      className="contact--form-input"
                      placeholder="Name"
                      required
                    />
                    <input
                      onChange={handleChangeFormValues}
                      value={inputs.email}
                      name="email"
                      type="email"
                      className="contact--form-input"
                      placeholder="E-mail"
                      required />
                    <input
                      onChange={handleChangeFormValues}
                      value={inputs.phone}
                      name="phone"
                      type="tel"
                      className="contact--form-input"
                      placeholder="Phone number"
                    />
                    <textarea
                      onChange={handleChangeFormValues}
                      value={inputs.message}
                      name="message"
                      className="contact--form-input"
                      placeholder="Message"
                    />
                    <button
                      className="link-button dark wide"
                      type="submit"
                    >
                      {isSending ? 'Sending...' : 'Send'}
                    </button>
                  </form>
                </div>
                <div className="contacts-page--next">
                  <h3 className="contacts-page--next-title">What's next</h3>
                  <p>We’ll contact you within a few hours with our next steps. We normally schedule a call with our
                  engineers to discuss your project in more detail. If you’d like to sign an NDA, please let us know.
										We’ll prepare it for you.</p>
                  <p>Since we live on two different continents (Australia and Europe) we are available around the clock.
									</p>
                </div>
              </div>
            </div>
            <div className="contacts-page--visit container">
              <h3 className="contacts-page--visit-title">Visit us</h3>
              <div className="contacts-page--visit-text">Our company management and business development team is located in
								Sydney, Australia. Our engineering team is located in Kremenchuk, Ukraine.</div><img
                className="contacts-page--visit-image" alt="macbook"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY0cHgiIGhlaWdodD0iMTQycHgiIHZpZXdCb3g9IjAgMCAyNjQgMTQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPk1hY2Jvb2sgaWxsdXN0cmF0aW9uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI4Ny44OTY3NDA0JSIgeTE9IjQ1LjAzMTI4NTMlIiB4Mj0iLTEwMC41NjM3NzIlIiB5Mj0iNDUuMDMxMjg1MyUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMC4zNTk0MDg2MDIiIG9mZnNldD0iNTYuMTA3MDM4MSUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXZWJfR2V0X2luX3RvdWNoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODMzLjAwMDAwMCwgLTcxMi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ik1hY2Jvb2staWxsdXN0cmF0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MzMuMDAwMDAwLCA3MDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzkuOTc5NjcyLCAzMS4wMDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE3OS45Nzk2NzIsIC0zMS4wMDAwMDApICIgcG9pbnRzPSIxNTEuOTc5NjcyIC01My45Nzk2NzIxIDIwNy45Nzk2NzIgLTQyLjkwNDMyMjcgMjA3Ljk3OTY3MiAxMTUuOTc5NjcyIDE1MS45Nzk2NzIgMTA0LjAzMDA0MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU1LDE0NiBMMjMwLDE0NiBMMjMwLDE0NiBDMjMwLDE0OS4zMTM3MDggMjI3LjMxMzcwOCwxNTIgMjI0LDE1MiBMNTUsMTUyIEw1NSwxNDYgWiIgaWQ9IlJlY3RhbmdsZS0xNyIgZmlsbD0iI0I4QzBEMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMTQ2IEw3NywxNDYgQzc4LjY1Njg1NDIsMTQ2IDgwLDE0Ny4zNDMxNDYgODAsMTQ5IEw4MCwxNDkgQzgwLDE1MC42NTY4NTQgNzguNjU2ODU0MiwxNTIgNzcsMTUyIEw2LDE1MiBDMi42ODYyOTE1LDE1MiA0LjA1ODEyMjUxZS0xNiwxNDkuMzEzNzA4IDAsMTQ2IFoiIGlkPSJSZWN0YW5nbGUtMTctQ29weSIgZmlsbD0iI0Q1RDhERSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwOC40MzQ5NTgsMzQgTDI0Ni44OTEyNDUsMzQgQzI1Mi40MTQwOTMsMzQgMjU2Ljg5MTI0NSwzOC40NzcxNTI1IDI1Ni44OTEyNDUsNDQgQzI1Ni44OTEyNDUsNDQuNjM0NDMzNiAyNTYuODMwODcsNDUuMjY3NDI3NSAyNTYuNzEwOTM1LDQ1Ljg5MDQyMTYgTDIzOS4zODQ3MzIsMTM1Ljg5MDQyMiBDMjM4LjQ3ODQ3NywxNDAuNTk3OTExIDIzNC4zNTg5NzEsMTQ0IDIyOS41NjUwNDIsMTQ0IEw5MS4xMDg3NTQ4LDE0NCBDODUuNTg1OTA3MywxNDQgODEuMTA4NzU0OCwxMzkuNTIyODQ3IDgxLjEwODc1NDgsMTM0IEM4MS4xMDg3NTQ4LDEzMy4zNjU1NjYgODEuMTY5MTMwNCwxMzIuNzMyNTczIDgxLjI4OTA2NTEsMTMyLjEwOTU3OCBMOTguNjE1MjY4Myw0Mi4xMDk1Nzg0IEM5OS41MjE1MjMsMzcuNDAyMDg5MSAxMDMuNjQxMDI5LDM0IDEwOC40MzQ5NTgsMzQgWiIgaWQ9IlJlY3RhbmdsZS0xNiIgZmlsbD0iI0UyRTVFQiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC04IiBmaWxsPSIjRkZGRkZGIiBjeD0iMTcyIiBjeT0iODkiIHI9IjEyIj48L2NpcmNsZT4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" />
            </div>
            {isPopupVisible && (
              <div className="popup--wrapper">
                <div className="popup--content popup--content-result" data-gtm-vis-recent-on-screen-6130796_6="3346304"
                  data-gtm-vis-first-on-screen-6130796_6="3346304" data-gtm-vis-total-visible-time-6130796_6="100"
                  data-gtm-vis-has-fired-6130796_6="1"
                >
                  <h3>Thanks for filling out our form!</h3>
                  <p>We will look over your message and Tatiana will get back to you in 24 hours. In the meantime, you can
                    check the <a href="#top">Foundation</a> section, look over our <a href="#top">projects
                    collection</a> or browse through our latest <a href="#top">blog posts</a>.</p>
                  <p>Your mate at MadAppGang, Jack Rudenko.</p>
                  <div
                    onClick={handleClickPopupСonfirm}
                    className="link-button dark wide popup-content--ok"
                  >
                    OK
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
        <footer className="footer">
          <div className="footer--top">
            <div className="footer--content container">
              <div className="footer--text">
                <p>MadAppGang is a team of tech experts specializing in mobile technologies. <br />We develop applications
                            for iOS, Android, WatchOS, tvOS, Wear OS, wearables, and provide loT system integration services. Our
                            experience with mobile apps, artificial intelligence, and embedded system provides a uniquely powerful
									resource for our clients.</p>
                <p>We work with established businesses and startups who are seeking to innovate and improve customer
                experience. Over the past few years we`ve built solutions for fintech, healthcare, fitness,
									transportation, and communication industries.</p>
              </div>
              <div className="footer--contact">
                <div className="footer--socials">
                  <div className="footer--socials-title">Follow us</div>
                  <div className="footer--socials-links"><a className="footer--socials-link"
                    href="#top" rel="noopener noreferrer"><img
                      alt="facebook icon"
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjE3cHgiIHZpZXdCb3g9IjAgMCA5IDE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmZhY2Vib29rLWxvZ288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkVsZW1lbnQvRm9vdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA0My4wMDAwMDAsIC0xNjEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJFbGVtZW50L0Zvb3Rlci1Db3B5Ij4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAyNC4wMDAwMDAsIDE0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImZhY2Vib29rLWxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuNjYxMDg2NCwzLjAwMzUzNzEzIEwxMy41MDIzOTU3LDMgQzExLjA3NzE4MDYsMyA5LjUwOTkwMDEzLDQuNjQyMTE0NzkgOS41MDk5MDAxMyw3LjE4MzcyMjk0IEw5LjUwOTkwMDEzLDkuMTEyNjk5MzUgTDcuMzM5NDMzMTIsOS4xMTI2OTkzNSBDNy4xNTE4NzksOS4xMTI2OTkzNSA3LDkuMjY3OTc5NTcgNyw5LjQ1OTUxNTQxIEw3LDEyLjI1NDM4MjQgQzcsMTIuNDQ1OTE4MyA3LjE1MjA1MjE4LDEyLjYwMTAyMTYgNy4zMzk0MzMxMiwxMi42MDEwMjE2IEw5LjUwOTkwMDEzLDEyLjYwMTAyMTYgTDkuNTA5OTAwMTMsMTkuNjUzMzYwOCBDOS41MDk5MDAxMywxOS44NDQ4OTY2IDkuNjYxNzc5MTQsMjAgOS44NDkzMzMyNiwyMCBMMTIuNjgxMTc1MywyMCBDMTIuODY4NzI5NCwyMCAxMy4wMjA2MDg0LDE5Ljg0NDcxOTggMTMuMDIwNjA4NCwxOS42NTMzNjA4IEwxMy4wMjA2MDg0LDEyLjYwMTAyMTYgTDE1LjU1ODM5MDYsMTIuNjAxMDIxNiBDMTUuNzQ1OTQ0NywxMi42MDEwMjE2IDE1Ljg5NzgyMzcsMTIuNDQ1OTE4MyAxNS44OTc4MjM3LDEyLjI1NDM4MjQgTDE1Ljg5ODg2MjgsOS40NTk1MTU0MSBDMTUuODk4ODYyOCw5LjM2NzU0OTkxIDE1Ljg2MzAxNDUsOS4yNzk0NzUyNiAxNS43OTk0NTc0LDkuMjE0MzkxOTggQzE1LjczNTkwMDIsOS4xNDkzMDg3IDE1LjY0OTMxMDIsOS4xMTI2OTkzNSAxNS41NTkyNTY1LDkuMTEyNjk5MzUgTDEzLjAyMDYwODQsOS4xMTI2OTkzNSBMMTMuMDIwNjA4NCw3LjQ3NzQ4MTk4IEMxMy4wMjA2MDg0LDYuNjkxNTMwNjQgMTMuMjA0MDA2Miw2LjI5MjU0MTg1IDE0LjIwNjU0NjIsNi4yOTI1NDE4NSBMMTUuNjYwNzQwMSw2LjI5MjAxMTI4IEMxNS44NDgxMjEsNi4yOTIwMTEyOCAxNiw2LjEzNjczMTA2IDE2LDUuOTQ1MzcyMDggTDE2LDMuMzUwMTc2MzQgQzE2LDMuMTU4OTk0MjEgMTUuODQ4Mjk0MiwzLjAwMzg5MDg1IDE1LjY2MTA4NjQsMy4wMDM1MzcxMyBaIiBpZD0iU2hhcGUiIGZpbGw9IiM3MDdFOEMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0zIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" /></a><a
                        className="footer--socials-link" href="#top"
                        rel="noopener noreferrer"><img alt="twitter icon"
                          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwICg1NDk4MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c29jaWFsIGljb25fdHc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAgMjQgMCAwIDI0IDAgMjQgMjQiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRWxlbWVudC9Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTAzLjAwMDAwMCwgLTE2Mi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IkVsZW1lbnQvRm9vdGVyLUNvcHkiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDI0LjAwMDAwMCwgMTQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic29jaWFsLWljb25fdHciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc3LjAwMDAwMCwgMTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMiw1Ljg5Mzk4MDQxIEMyMS4yNjQyLDYuMjE1Mjg3NjkgMjAuNDczMyw2LjQzMjQ0NTc0IDE5LjY0MzQsNi41Mjk5OTk1MSBDMjAuNDkwNCw2LjAzMDEyMjU2IDIxLjE0MTEsNS4yMzg1Njg2OSAyMS40NDc1LDQuMjk1MzE5MTkgQzIwLjY1NDYsNC43NTgyODEyNCAxOS43NzY1LDUuMDk0MzU0NDggMTguODQxOCw1LjI3NTQ4MzU5IEMxOC4wOTM0LDQuNDkwNDI2NzQgMTcuMDI3LDQgMTUuODQ2OCw0IEMxMy41ODA4LDQgMTEuNzQzNSw1LjgwODQzNjI4IDExLjc0MzUsOC4wMzkwODA1NyBDMTEuNzQzNSw4LjM1NTY2Mjc1IDExLjc3OTgsOC42NjM5NzU5OCAxMS44NDk4LDguOTU5NTkwNDkgQzguNDM5Niw4Ljc5MTE2MDExIDUuNDE2MSw3LjE4MzA0ODY4IDMuMzkyNCw0LjczOTI4MjM3IEMzLjAzOTIsNS4zMzU4MjcxNCAyLjgzNjgsNi4wMjk3Mjg4IDIuODM2OCw2Ljc2OTk5NTU3IEMyLjgzNjgsOC4xNzEzODM1NyAzLjU2MTIsOS40MDc2ODgxNCA0LjY2MjIsMTAuMTMyMDA3NyBDMy45ODk2LDEwLjExMTA0IDMuMzU2OSw5LjkyOTMyMDI3IDIuODAzNyw5LjYyNjgxNDk4IEMyLjgwMzMsOS42NDM2NDgxOCAyLjgwMzMsOS42NjA0ODEzNyAyLjgwMzMsOS42Nzc2MDk4OCBDMi44MDMzLDExLjYzNDU5MTcgNC4yMTc3LDEzLjI2NzExNjIgNi4wOTQ4LDEzLjYzODIzNCBDNS43NTA1LDEzLjczMDU3MDUgNS4zODgsMTMuNzc5OTg3MiA1LjAxMzgsMTMuNzc5OTg3MiBDNC43NDk0LDEzLjc3OTk4NzIgNC40OTIzLDEzLjc1NDU4OTggNC4yNDE4LDEzLjcwNzQzNzEgQzQuNzYzOSwxNS4zMTIxMDMyIDYuMjc5MiwxNi40Nzk5OTIxIDguMDc0OCwxNi41MTI0NzcyIEM2LjY3MDUsMTcuNTk1OTA0OSA0LjkwMTMsMTguMjQxNjY5NSAyLjk3ODgsMTguMjQxNjY5NSBDMi42NDc2LDE4LjI0MTY2OTUgMi4zMjEsMTguMjIyNDczOCAyLDE4LjE4NTE2NTEgQzMuODE1OSwxOS4zMzEyMDA1IDUuOTcyNywyMCA4LjI4OTksMjAgQzE1LjgzNzIsMjAgMTkuOTY0NSwxMy44NDUxNTQzIDE5Ljk2NDUsOC41MDc0NTY4MSBDMTkuOTY0NSw4LjMzMjMzMjUzIDE5Ljk2MDQsOC4xNTgxOTI2NSAxOS45NTI1LDcuOTg0OTM4NzIgQzIwLjc1NDMsNy40MTUzNjY0NCAyMS40NDk5LDYuNzA0MDQwOTUgMjIsNS44OTM5ODA0MSIgaWQ9IkZpbGwtMSIgZmlsbD0iIzcwN0U4QyIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" /></a><a
                            className="footer--socials-link" href="#top"
                            rel="noopener noreferrer"><img alt="instagram icon"
                              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwICg1NDk4MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW5zdGFncmFtLWxvZ288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkVsZW1lbnQvRm9vdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE2Ni4wMDAwMDAsIC0xNjAuMDAwMDAwKSIgZmlsbD0iIzcwN0U4QyIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IkVsZW1lbnQvRm9vdGVyLUNvcHkiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDI0LjAwMDAwMCwgMTQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaW5zdGFncmFtLWxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0Mi4wMDAwMDAsIDE0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjQ4MDYwNDcsMCBMNS41MTkxNTg2NSwwIEMyLjQ3NTg5NjQyLDAgMCwyLjQ3NjAxNDcyIDAsNS41MTkyNzY5NSBMMCwxNC40ODA3MjMgQzAsMTcuNTI0MTAzNiAyLjQ3NTg5NjQyLDIwIDUuNTE5MTU4NjUsMjAgTDE0LjQ4MDYwNDcsMjAgQzE3LjUyNDEwMzYsMjAgMjAsMTcuNTIzOTg1MyAyMCwxNC40ODA3MjMgTDIwLDUuNTE5Mjc2OTUgQzIwLjAwMDExODMsMi40NzYwMTQ3MiAxNy41MjQxMDM2LDAgMTQuNDgwNjA0NywwIFogTTE4LjIyNTYyMTQsMTQuNDgwNzIzIEMxOC4yMjU2MjE0LDE2LjU0NTY0NiAxNi41NDU2NDYsMTguMjI1NTAzMSAxNC40ODA3MjMsMTguMjI1NTAzMSBMNS41MTkxNTg2NSwxOC4yMjU1MDMxIEMzLjQ1NDM1NDAyLDE4LjIyNTYyMTQgMS43NzQ0OTY5MywxNi41NDU2NDYgMS43NzQ0OTY5MywxNC40ODA3MjMgTDEuNzc0NDk2OTMsNS41MTkyNzY5NSBDMS43NzQ0OTY5MywzLjQ1NDQ3MjMyIDMuNDU0MzU0MDIsMS43NzQ0OTY5MyA1LjUxOTE1ODY1LDEuNzc0NDk2OTMgTDE0LjQ4MDYwNDcsMS43NzQ0OTY5MyBDMTYuNTQ1NTI3NywxLjc3NDQ5NjkzIDE4LjIyNTUwMzEsMy40NTQ0NzIzMiAxOC4yMjU1MDMxLDUuNTE5Mjc2OTUgTDE4LjIyNTUwMzEsMTQuNDgwNzIzIEwxOC4yMjU2MjE0LDE0LjQ4MDcyMyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjgyMTQyODU3LDQuNjQyODU3MTQgQzYuOTY1OTIxMjgsNC42NDI4NTcxNCA0LjY0Mjg1NzE0LDYuOTY1OTc0NiA0LjY0Mjg1NzE0LDkuODIxNTQ3NDUgQzQuNjQyODU3MTQsMTIuNjc3MDAxNCA2Ljk2NTkyMTI4LDE1IDkuODIxNDI4NTcsMTUgQzEyLjY3NjkzNTksMTUgMTUsMTIuNjc3MDAxNCAxNSw5LjgyMTU0NzQ1IEMxNSw2Ljk2NTk3NDYgMTIuNjc2OTM1OSw0LjY0Mjg1NzE0IDkuODIxNDI4NTcsNC42NDI4NTcxNCBaIE05LjgyMTQyODU3LDEzLjIxNjcwODQgQzcuOTQ5MjU5MDQsMTMuMjE2NzA4NCA2LjQyNTk4ODk2LDExLjY5MzY0MTEgNi40MjU5ODg5Niw5LjgyMTQyODU3IEM2LjQyNTk4ODk2LDcuOTQ5MDk3MTggNy45NDkxNDAxNiw2LjQyNTkxMTAyIDkuODIxNDI4NTcsNi40MjU5MTEwMiBDMTEuNjkzNzE3LDYuNDI1OTExMDIgMTMuMjE2ODY4Miw3Ljk0OTA5NzE4IDEzLjIxNjg2ODIsOS44MjE0Mjg1NyBDMTMuMjE2ODY4MiwxMS42OTM2NDExIDExLjY5MzU5ODEsMTMuMjE2NzA4NCA5LjgyMTQyODU3LDEzLjIxNjcwODQgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuMTc4NTcxNCwzLjIxNDI4NTcxIEMxNC44NTAxNjIzLDMuMjE0Mjg1NzEgMTQuNTI3NTQ4NywzLjM0NzI0MDI2IDE0LjI5NTYxNjksMy41ODAxOTQ4MSBDMTQuMDYyNTQ4NywzLjgxMjAxMjk5IDEzLjkyODU3MTQsNC4xMzQ3NDAyNiAxMy45Mjg1NzE0LDQuNDY0Mjg1NzEgQzEzLjkyODU3MTQsNC43OTI4MDg0NCAxNC4wNjI2NjIzLDUuMTE1NDIyMDggMTQuMjk1NjE2OSw1LjM0ODM3NjYyIEMxNC41Mjc0MzUxLDUuNTgwMTk0ODEgMTQuODUwMTYyMyw1LjcxNDI4NTcxIDE1LjE3ODU3MTQsNS43MTQyODU3MSBDMTUuNTA4MTE2OSw1LjcxNDI4NTcxIDE1LjgyOTcwNzgsNS41ODAxOTQ4MSAxNi4wNjI2NjIzLDUuMzQ4Mzc2NjIgQzE2LjI5NTYxNjksNS4xMTU0MjIwOCAxNi40Mjg1NzE0LDQuNzkyNjk0ODEgMTYuNDI4NTcxNCw0LjQ2NDI4NTcxIEMxNi40Mjg1NzE0LDQuMTM0NzQwMjYgMTYuMjk1NjE2OSwzLjgxMjAxMjk5IDE2LjA2MjY2MjMsMy41ODAxOTQ4MSBDMTUuODMwODQ0MiwzLjM0NzI0MDI2IDE1LjUwODExNjksMy4yMTQyODU3MSAxNS4xNzg1NzE0LDMuMjE0Mjg1NzEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" /></a><a
                                className="footer--socials-link" href="#top"
                                rel="noopener noreferrer"><img alt="medium icon"
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMjMgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwICg1NDk4MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+UGF0aCAxMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRWxlbWVudC9Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjI5LjAwMDAwMCwgLTE2MC4wMDAwMDApIiBmaWxsPSIjNzA3RThDIj4KICAgICAgICAgICAgPGcgaWQ9IkVsZW1lbnQvRm9vdGVyLUNvcHkiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDI0LjAwMDAwMCwgMTQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC0xMiIgcG9pbnRzPSIyMDcuNzE3ODEzIDE4LjExNjI0NCAyMDcuNzE3ODEzIDI5LjAwNzIwMTQgMjA1LjAxMDEyOSAzMi4zMTUxNTc1IDIwNS4wMTAxMjkgMzIuODA1NzY4OCAyMTEuNjc5OTc0IDMyLjgwNTc2ODggMjExLjY3OTk3NCAzMi4zMDA1NzM0IDIwOS4wNTI0NDUgMjkuMDA3MjAxNCAyMDkuMDUyNDQ1IDE5Ljk1NDIzMDIgMjE0LjgyMzYyIDMyLjgwNTc2ODggMjE1LjYzMTQ2OSAzMi44MDU3Njg4IDIyMC42MTM0NTYgMTkuOTU0MjMwMiAyMjAuNjEzNDU2IDMwLjQ3MTU3NjcgMjE4LjY5MjAzMSAzMi4zMTUxNTc1IDIxOC42OTIwMzEgMzIuODA1NzY4OCAyMjcuNTc1MzEzIDMyLjgwNTc2ODggMjI3LjU3NTMxMyAzMi4zMTUxNTc1IDIyNS42NzA2NjQgMzAuNDcxNTc2NyAyMjUuNjcwNjY0IDE3LjA5MTM4NCAyMjcuNTc1MzEzIDE1LjI2NjE3NDQgMjI3LjU3NTMxMyAxNC44MDU3Njg4IDIyMS4yOTc3NDMgMTQuODA1NzY4OCAyMTYuOTExODk0IDI1Ljg2Nzk2MjkgMjExLjg5NTQ1OCAxNC44MDU3Njg4IDIwNS4zMTA3MjQgMTQuODA1NzY4OCAyMDUuMzEwNzI0IDE1LjI2NjE3NDQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" /></a>
                  </div>
                </div><a className="footer--mail" href="#top"
                  rel="noopener noreferrer"><img alt="mailbox icon"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTU2cHgiIGhlaWdodD0iMTQ1cHgiIHZpZXdCb3g9IjAgMCAxNTYgMTQ1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkVsZW1lbnQvRm9vdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEyNC4wMDAwMDAsIC0yNTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC04Ij4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMjQuMDAwMDAwLCAyNTEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTU1LDAgTDEyMSwwIEMxMzguNjczMTEyLC0zLjI0NjQ5ODAxZS0xNSAxNTMsMTQuMzI2ODg4IDE1MywzMiBMMTUzLDgwIEwyMyw4MCBMMjMsMzIgQzIzLDE0LjMyNjg4OCAzNy4zMjY4ODgsMy4yNDY0OTgwMWUtMTUgNTUsMCBaIiBpZD0iUmVjdGFuZ2xlLTExIiBmaWxsPSIjQ0ZENkU2Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xOCIgZmlsbD0iI0I4QzBEMCIgeD0iOTEiIHk9IjMzIiB3aWR0aD0iNjIiIGhlaWdodD0iNDciPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTE1IiBmaWxsPSIjMUUzNDREIiB4PSI3NiIgeT0iODUiIHdpZHRoPSIyNiIgaGVpZ2h0PSI2MCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTUtQ29weSIgZmlsbD0iIzIzM0Q1OSIgeD0iOTIiIHk9Ijg1IiB3aWR0aD0iMTAiIGhlaWdodD0iNjAiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTUuMDQ0MzQ3OSwxMjEuODIwODk5IEM5My4wMDEyNTE5LDExNi45NTQ0MjEgOTEuODgwNjI4MiwxMzIuMTU4MDc3IDk0LjkzMzExMTcsMTM5LjQyNDk2NCBDOTguMjIzMDc5MSwxNDcuMjU3MjE4IDEwNy44MDkwOTcsMTQ5LjQ1NjY5NCAxMDkuMzM3MiwxNDEuNjcyOTM1IEMxMTUuNzE0NzAyLDEzNi41MzU5NTcgMTA5LjAwMTY2NywxMzMuNzAwNjc4IDEwMy41MjQxNjcsMTMwLjQwOTQ2NCBDMTAwLjQwOTk0MywxMjguNTM4MjQ5IDk2LjIzOTM0OTgsMTI0LjY2NzI4OSA5NS4wNDQzNDc5LDEyMS44MjA4OTkgWiIgaWQ9IlBhdGgtNDQtQ29weS0yIiBmaWxsPSIjMDJBRDhBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDIuNDkxNDY5LCAxMzMuNzAwMjQ5KSBzY2FsZSgtMSwgLTEpIHJvdGF0ZSg2MDcuMDAwMDAwKSB0cmFuc2xhdGUoLTEwMi40OTE0NjksIC0xMzMuNzAwMjQ5KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjEuODAzNzk3NSwxMzIuNDE2NDA0IEM3MS40NDQ2MDY1LDEzMS4zMjYyNDMgNzUuMzMwOTQ2NiwxNDEuNDA2NjE1IDgxLjU0MDAxNzksMTQxLjgyODgyMSBDODcuNzQ5MDg5MiwxNDIuMjUxMDI4IDkzLjU0NDMzODcsMTM1LjU0MTIwMyA5NS40OTk1MTU1LDEzMC45MjI0NjYgQzk0Ljc2MzkxMTYsMTIzLjg3NzM3MSA4Ni43MTM0MTYxLDEyMS45MzQyNzcgNzcuMDQyNTUxOSwxMjIuMjU5MjIzIEM2Ny4zNzE2ODc2LDEyMi41ODQxNjkgNTIuMTYyOTg4NSwxMzMuNTA2NTY1IDYxLjgwMzc5NzUsMTMyLjQxNjQwNCBaIiBpZD0iUGF0aC00Mi1Db3B5LTIiIGZpbGw9IiMxQUM0QTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc3LjExMTgyNywgMTMyLjAzNjU0OSkgcm90YXRlKDM4LjAwMDAwMCkgdHJhbnNsYXRlKC03Ny4xMTE4MjcsIC0xMzIuMDM2NTQ5KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTE1LUNvcHktMiIgZmlsbC1vcGFjaXR5PSIwLjE4MjYwMzAzNCIgZmlsbD0iIzRGMjUwQiIgeD0iNzYiIHk9Ijg1IiB3aWR0aD0iMjYiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NywyIEw1NywyIEM3NC42NzMxMTIsMiA4OSwxNi4zMjY4ODggODksMzQgTDg5LDgwIEwyNSw4MCBMMjUsMzQgQzI1LDE2LjMyNjg4OCAzOS4zMjY4ODgsMiA1NywyIFoiIGlkPSJSZWN0YW5nbGUtMTEtQ29weSIgZmlsbD0iIzIyMzM0NiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NywyIEMzOS4zMjY4ODgsMiAyNSwxNi4zMjY4ODggMjUsMzQgTDI1LDgwIEwzOS4xNDI3MTQzLDgwLjI3ODE5MjEgTDM5LjE0MjcxNDMsMzEuNjM1MjQ3MyBDMzkuMTQyNzE0MywxMy45NjIxMzUzIDQ1LjM5OTIzMDksNy4wOTAyMDQ3NCA1NywyIFoiIGlkPSJSZWN0YW5nbGUtMTEtQ29weS0yIiBmaWxsPSIjMkI0MjVDIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLTEyIiBmaWxsPSIjMDM1M0IyIiBwb2ludHM9IjAgMjAgMzIgNCA2NCAyMCA2NCA2MCAwIDYwIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMjAiIGZpbGw9IiNGRkZGRkYiIHg9IjciIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1NiIgcng9IjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xNCIgZmlsbD0iI0UyRTVFQiIgeD0iMTMiIHk9IjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyIiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTE0LUNvcHkiIGZpbGw9IiNFMkU1RUIiIHg9IjEzIiB5PSIxMyIgd2lkdGg9IjM4IiBoZWlnaHQ9IjIiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQtQ29weS0yIiBmaWxsPSIjRTJFNUVCIiB4PSIxMyIgeT0iMTgiIHdpZHRoPSIzOCIgaGVpZ2h0PSIyIiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTE0LUNvcHktMyIgZmlsbD0iI0UyRTVFQiIgeD0iMTMiIHk9IjIzIiB3aWR0aD0iMzgiIGhlaWdodD0iMiIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xNC1Db3B5LTQiIGZpbGw9IiNFMkU1RUIiIHg9IjEzIiB5PSIyOCIgd2lkdGg9IjM4IiBoZWlnaHQ9IjIiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQtQ29weS01IiBmaWxsPSIjRTJFNUVCIiB4PSIxMyIgeT0iMzMiIHdpZHRoPSIzOCIgaGVpZ2h0PSIyIiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLTEyIiBmaWxsPSIjMDA2RUYxIiBwb2ludHM9IjY0IDIwIDY0IDYwIDAgNjAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS0xMiIgZmlsbD0iIzI0ODdGQyIgcG9pbnRzPSIwIDIwIDY0IDYwIDAgNjAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMyIgZmlsbD0iIzlGQTlCRSIgeD0iMjMiIHk9Ijc4IiB3aWR0aD0iMTMzIiBoZWlnaHQ9IjgiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMy1Db3B5IiBmaWxsPSIjQ0ZENkU2IiB4PSIwIiB5PSI3OCIgd2lkdGg9Ijg4IiBoZWlnaHQ9IjgiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" /></a>
              </div>
            </div>
          </div>
          <div className="footer--bottom">
            <div className="footer--content container">
              <nav className="footer--menu menu "><a className="footer--menu-item" href="#top">Services</a><a
                className="footer--menu-item" href="#top">Experience</a><a className="footer--menu-item"
                  href="#top">Foundation</a><a className="footer--menu-item" href="#top">Team</a><a
                    className="footer--menu-item" href="#top">Blog</a></nav>
              <div className="footer--copyright">© MadAppGang Pty Ltd, 2018</div>
            </div>
          </div>
        </footer>
      </div>
    </div>

  );
}

export default App;
