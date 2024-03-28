import * as React from "react"

import Main from "../components/Main/Main";
import Benefits from "../components/Benefits/Benefits";
import YouStart from "../components/YouStart/YouStart";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Reviews from "../components/Reviews/Reviews";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";


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
