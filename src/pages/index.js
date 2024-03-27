import * as React from "react"

import Main from "../pages/Main/Main";
import Benefits from "../pages/Benefits/Benefits";
import YouStart from "../pages/YouStart/YouStart";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import Reviews from "../pages/Reviews/Reviews";
import Form from "../pages/Form/Form";
import Footer from "../pages/Footer/Footer";



const IndexPage = () => {
  return (
    <main>
      <Main />

<Benefits />

<YouStart />

<HowItWorks />

<Reviews />

<Form />

<Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
