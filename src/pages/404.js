import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Employ from "../images/nathan-pyle-employ.jpg"

import styled from "styled-components"
import Media from "../utility/media"

const Header = styled.h1`
  font-family: "PT Sans", sans-serif;
  font-size: 50px;
  line-height: 40px;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  ${Media.tablet`
  font-size: 60px;
  line-height: 50px;
`}
`

const Image = styled.img`
  width: 100%;
  height: auto;
  ${Media.tablet`
    width: 600px;
    height: 600px;
  `}
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 15px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #fff;
  ${Media.laptop`
  font-size: 20px;
  line-height: 18px;
`}
`

const PageLink = styled(props => <Link {...props} />)`
  display: block;
  color: #fff;
  font-size: 18px;
  line-height: 15px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-decoration: none;

  span {
    text-decoration: underline;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header>404</Header>
    <Paragraph>Oops! Page not found</Paragraph>
    <Image src={Employ} alt="Nathan Pyle Employ" />
    <PageLink to="/">
      Take me back <span>home!</span>
    </PageLink>
  </Layout>
)

export default NotFoundPage
