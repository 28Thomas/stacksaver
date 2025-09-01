import { Resend } from 'resend';

// Debug: Check if API key is available
console.log('RESEND_API_KEY available:', !!process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length);

let resend: Resend | null = null;

try {
  if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Resend initialized successfully');
  } else {
    console.error('RESEND_API_KEY not found in environment variables');
  }
} catch (error) {
  console.error('Failed to initialize Resend:', error);
}

export const sendWelcomeEmail = async (email: string, _aiTool?: string) => {
  const subject = 'Thanks for joining StackSaver! 🎉';
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to StackSaver</title>
    </head>
    <body style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: white;">
      
      <!-- Main content - white box with thicker green border -->
      <div style="background: white; padding: 40px; border-radius: 20px; border: 4px solid #d1fae5; margin: 0; width: 100%;">
        
        <!-- Hi! greeting -->
        <p style="font-size: 18px; font-weight: bold; margin: 0 0 20px 0; color: #333;">Hi!</p>
        
        <!-- Main message -->
        <p style="font-size: 16px; margin: 0 0 20px 0; color: #333; line-height: 1.6;">
          Thanks for joining the early access list to StackSaver.io
        </p>
        
        <!-- What we do section -->
        <p style="font-size: 16px; font-weight: bold; margin: 0 0 15px 0; color: #333;">
          In short what we do and plan to do:
        </p>
        
        <p style="font-size: 16px; margin: 0 0 10px 0; color: #333; line-height: 1.6; padding-left: 20px;">
          Provide you with discounts on trending AI software so you never pay full price again.
        </p>
        
        <p style="font-size: 16px; margin: 0 0 20px 0; color: #333; line-height: 1.6; padding-left: 20px;">
          We go unnoticed, until you need us - just before purchase.
        </p>
        
        <!-- Personal message -->
        <p style="font-size: 16px; margin: 0 0 20px 0; color: #333; line-height: 1.6;">
          I'm Thomas and built this tool after wasting too much time hunting coupons while testing AI Products.
        </p>
        
        <!-- Contact info -->
        <p style="font-size: 16px; margin: 0 0 20px 0; color: #333; line-height: 1.6;">
          Feel free to reach out by replying on this email.
        </p>
        
        <!-- Closing -->
        <p style="font-size: 16px; margin: 0 0 20px 0; color: #333; line-height: 1.6;">
          Keep you posted!
        </p>
        
        <!-- Signature -->
        <p style="font-size: 16px; margin: 0 0 5px 0; color: #333; line-height: 1.6;">
          Thanks,
        </p>
        
        <p style="font-size: 18px; font-weight: bold; margin: 0 0 5px 0; color: #333;">
          Thomas
        </p>
        
        <p style="font-size: 14px; margin: 0; color: #333;">
          -Founder @ StackSaver.io
        </p>
        
      </div>

    </body>
    </html>
  `;

  if (!resend) {
    console.error('Resend not initialized - cannot send email');
    throw new Error('Email service not configured');
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Thomas <thomas@stacksaver.io>',
      to: [email],
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error('Failed to send email');
    }

    console.log('Welcome email sent successfully to:', email);
    return data;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};
