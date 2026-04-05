const welcomeTemplate = (data) => {
  return `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    
    <table width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          
          <table width="400" style="background-color: #ffffff; padding: 20px; border-radius: 8px; text-align: center;">
            
            <tr>
              <td>
                <h1 style="color: red;">OTP Verification</h1>
              </td>
            </tr>

            <tr>
              <td>
                <p style="color: #666;">
                  Hello ${data.name}, your OTP for account verification is:
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <p style="font-size: 36px; color: #7b68ee; margin: 20px 0;">
                  ${data.otp}
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </div>
  `;
};

export default welcomeTemplate;