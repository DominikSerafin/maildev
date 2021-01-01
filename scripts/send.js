
/**
 * MailDev - send.js -- send a few emails for testing
 *
 * Run this to send emails to port 1025 for testing MailDev during development
 *   node test/scripts/send.js
 */
const path = require('path')
const nodemailer = require('nodemailer')

// Create a transport with MailDev's default receiving port
var transporter = nodemailer.createTransport({
  port: 1025,
  ignoreTLS: true
})

// Messages list
var messages = [

  // Email w/ simple attachment and basic header
  {
    from: 'Angelo Pappas <angelo.pappas@fbi.gov>',
    to: 'Johnny Utah <johnny.utah@fbi.gov>',
    subject: 'The ex-presidents are surfers',
    headers: {
      'X-some-header': 1000
    },
    text: 'The wax at the bank was surfer wax!!!',
    html: '<!DOCTYPE html><html><head></head><body>' +
          '<script type=\'text/javascript\'>alert("Hello World")</script>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '</body></html>',
    attachments: [
      { fileName: 'notes.txt', content: 'Info on surf board wax', contentType: 'text/plain' }
    ]
  },

  // Email w/ simple attachment and basic header
  {
    from: 'Angelo Pappas <angelo.pappas@fbi.gov>',
    to: ['Johnny Long Name Utah <johnny.long.email.address.utah@fbi.gov>', 'Johnny2 Utah <johnny2.utah@fbi.gov>', 'Johnny3 Utah <johnny3.utah@fbi.gov>'],
    subject: 'The ex-presidents are surfers. The ex-presidents are surfers. The ex-presidents are surfers. The ex-presidents are surfers.',
    headers: {
      'X-some-header': 1000
    },
    text: 'The wax at the bank was surfer wax!!!',
    html: '<!DOCTYPE html><html><head></head><body>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '<p>The wax at the bank was surfer wax!!!</p>' +
          '</body></html>',
  },

  // Plain text email
  {
    from: 'Johnny Utah <johnny.utah@fbi.gov>',
    to: 'Angelo Pappas <angelo.pappas@fbi.gov>',
    subject: 'You were right.',
    text: 'They are surfers.'
  },


  // HTML email w/ image
  {
    from: 'Bodhi <bodhi@gmail.com>',
    to: 'Johnny Utah <johnny.utah@fbi.gov>',
    subject: 'The ultimate price',
    text: 'If you want the ultimate, you\'ve got to be willing to pay the ultimate price. \nIt\'s not tragic to die doing what you love.',
    html: '<!DOCTYPE html><html><head></head><body style="background:#eeefont-family:sans-serifpadding:2em 2em">' +
          '<h1>Point Break</h1>' +
          '<img src="http://farm8.staticflickr.com/7337/11784709785_bbed9bae7d_m.jpg">' +
          '<p>If you want the ultimate, you\'ve got to be willing to pay the ultimate price. <br>It\'s not tragic to die doing what you love.</p>' +
          '<p><strong>- Bodhi</strong></p>' +
          '</body></html>'
  },

  // Email w/ embedded image
  {
    from: 'Johnny Utah <johnny.utah@fbi.gov>',
    to: 'Bodhi <bodhi@gmail.com>',
    subject: 'Where\'s Tyler?',
    html: 'Here she is:<br><img src="cid:image"/>',
    attachments: [
      {
        filename: 'tyler.jpg',
        path: path.join(__dirname, '/../test/tyler.jpg'),
        cid: 'image'
      }
    ]
  },

  // Another email w/ embedded image, with same cid
  {
    from: 'Bodhi <bodhi@gmail.com>',
    to: 'Johnny Utah <johnny.utah@fbi.gov>',
    subject: 'Big wave coming',
    html: 'You need to catch this!<br><img src="cid:image"/>',
    attachments: [
      {
        filename: 'wave.jpg',
        path: path.join(__dirname, '/../test/wave.jpg'),
        cid: 'image'
      }
    ]
  }

]

function sendEmails () {
  for (const message of messages) {
    transporter.sendMail(message, function (err, info) {
      if (err) { return console.log('Test email error: ', err) }
      console.log('Test email sent: ' + info.response)
    })
  }
}

// Run once if called directly, otherwise export
if (require.main === module) { sendEmails() } else { module.exports = sendEmails }
