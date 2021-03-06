const express = require('express')

// Create express instance
const app = express()

// Require API routes
const test = require('./routes/test')
const users = require('./routes/users')
const betting = require('./routes/betting')

// Import API Routes
app.use(test)
app.use('/users', users)
app.use('/betting', betting)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}