// myForm.test.js
import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Form from './components/Form';

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  render(<Form onSubmit={handleSubmit} />)
  const user = userEvent.setup()

  await user.type(screen.getByRole("input", { name: /name/i }), 'John Dee')
  await user.type(screen.getByRole("input", { name: /email/i }), 'john.dee@someemail.com')
  await user.type(screen.getByRole("input", { name: /phone/i }), '09176543210')
  await user.type(screen.getByRole("select", { name: /occasion/i }), 'Birthday')
  await user.type(screen.getByRole("input", { name: /guests/i }), '5')
  await user.type(screen.getByRole("input", { name: /date/i }), '03/26/2023 04:30 PM')
  await user.type(screen.getByRole("textaria", { name: /message/i }), '')

  await user.click(screen.getByRole('button', {name: /submit/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      name: "John Dee",
      email: "john.dee@someemail.com",
      phone: "09176543210",
      occasion: "Birthday",
      guests: "5",
      date: "03/26/2023 04:30 PM",
      message: "",
    }),
  )
})