const otpMail = (otp, instituteName) => {
    // OTP is a string of 6 characters
    const otpArray = otp.split('');
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to AlumniSuite</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@600&display=swap"
        rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #14213D;
            user-select: none;
            /* Make entire template unselectable */
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #FFFFFF;
            border: 2px solid #14213D;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px #3658a1;
        }

        .header {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
        }

        .header h1 {
            font-size: 28px;
            margin: 0 5px;
            font-family: "Pacifico", serif;
            font-weight: 400;
        }

        .header h1:last-child {
            color: #FCA311;
        }

        .golden-text {
            color: #FCA311;
        }

        .message {
            text-align: left;
            font-size: 16px;
            line-height: 1.6;
            color: #14213D;
        }

        .message p {
            margin: 10px 0;
        }

        .otp-container {
            text-align: center;
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .otp-box {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: #FFFFFF;
            border: 2px solid #14213D;
            border-radius: 8px;
            margin: 5px;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            line-height: 38px;
            user-select: text;
            /* Make OTP boxes selectable */
        }

        .otp-container .dash {
            display: inline-block;
            width: 20px;
            text-align: center;
            font-size: 18px;
            color: #14213D;
            margin: 0 5px;
        }

        .footer {
            text-align: center;
            padding: 0.5px;
            background-color: #FCA311;
            color: #14213D;
            font-size: 12px;
            border-radius: 0 0 10px 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Alumni<span class="golden-text">Suite</span></h1>
        </div>
        <div class="body">
            <div class="message">
                <p>
                    Dear <span class="golden-text">${instituteName}</span> Team,
                </p>
                <p>
                    <strong>Welcome to AluminiSuite!</strong> We're thrilled to have you as part of our community.
                </p>
                <p>
                    To activate your account and start inviting students and alumni, please verify your email address by
                    entering the One-Time Password (OTP) provided below:
                </p>
                <!-- <p>For added security, we have generated a One-Time Password (OTP) for your access to the AlumniSuite platform.</p> -->
                <div class="otp-container golden-text">
                    <span class="otp-box">${otp[0]}</span>
                    <span class="otp-box">${otp[1]}</span>
                    <span class="otp-box">${otp[2]}</span>
                    <span class="dash">–</span>
                    <span class="otp-box">${otp[3]}</span>
                    <span class="otp-box">${otp[4]}</span>
                    <span class="otp-box">${otp[5]}</span>
                </div>
                <p>
                    This code is valid for the next 10 minutes. If you did not initiate this registration, please ignore this email.
                </p>
                <p>
                    Once your email is verified, you can proceed to access all the features available for your
                    institute.
                </p>
                <p>
                    If you have any questions or need assistance, please don't hesitate to reach out to our support team
                    at <a href="mailto:deshpandenilesh2003@gmail.com">deshpandenilesh2003@gmail.com</a>.
                </p>
                <p>
                    Thank you for choosing AluminiSuite!
                </p>
                <p>Best Regards,</p>
                <p><strong>AluminiSuite</strong></p>
            </div>
        </div>
        <div class="footer">
            <p style="font-size: medium;">&copy; 2024 AlumniSuite. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`
}

module.exports = otpMail;