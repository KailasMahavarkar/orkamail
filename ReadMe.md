## Getting Started:

**Install dependencies with npm or yarn**

    yarn install
    yarn start
    
---

**Create a .env file with configurations**

    // a shared few between orkamail and your backend
    MAIL_API_KEY=api_key
	    
    // SMTP configurations
    SMTP_SERVICE=gmail
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=587
    SMTP_AUTH_USERNAME=demo@gmail.com
    SMTP_AUTH_PASSWORD=your_password

----

**Creating an custom template**

    /templates
    	-template_name.template.js
    Note: Naming is strict .template.js is required to work.

	A template should contain schema and function called template


**Inside [template_name].template.js file:**
	
    const  schema  = {
	    company: {
		    type:  "string",
	    },
	    href: {
		    type:  "string",
	    },
    };
	

	// html code will have access to schema params with config variable.
	const otpTemplate = (config) => {
		return `<html> ${config.company} is awesome </html>`
	}
	
	// exporting template and schema
	module.exports = {
		schema: schema,
		template: otpTemplate
	}
 

----

**Sending Mail using orkamail**
	
	POST REQUEST: /mail
	
	Headers: 
	x-api-key: 		api_key (from .env file)
	Content-Type: 	application/json

	JSON Body:
    {
	    "email": "john@gmail.com",
	    "subject": "Mail from John",
	    "sender": "JohnWick",
	    "template": "verify",
	    "plaintext": plain_text,
	    "config": {
		    "company": "JohnWick Company",
		    "href": "https://shorturl.at/rsJQ8"
	    }
    }
    
	Working: config params will bind to template.(schema check will be performed on api request if bind parameter matches then a mail will be sent)
