import { StoryFn, Meta } from '@storybook/react'
import Login from './Login'
import path from 'src/constants/path'
import RegisterLayout from 'src/layouts/RegisterLayout'

export default {
  title: 'pages/Login',
  component: Login
} as Meta<typeof Login>

const Template: StoryFn<typeof Login> = () => {
  return <Login />
}

export const Primary = Template.bind({})

Primary.story = {
  parameters: {
    reactRouter: {
      routePath: path.login
    }
  }
}

export const LoginPage: StoryFn<typeof Login> = () => (
  <RegisterLayout>
    <Login />
  </RegisterLayout>
)
LoginPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.login
    }
  }
}
