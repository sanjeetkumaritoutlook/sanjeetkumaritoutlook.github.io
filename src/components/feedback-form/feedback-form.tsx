import { Component, h, Listen,Prop, Event, EventEmitter ,Watch,Element,State} from '@stencil/core';
//https://www.npmjs.com/package/@emailjs/browser
import emailjs from '@emailjs/browser';
//no backend server required: https://www.emailjs.com/docs/user-guide/connecting-email-services/
//earlier deprecated one: https://www.npmjs.com/package/emailjs-com
import tinymce from 'tinymce/tinymce';    //simply import 'tinymce' doesnt work
import 'tinymce/models/dom/model';

//https://stackoverflow.com/questions/68951483/tinymce-err-aborted-404-not-found-skins-vue
/* Default icons are required for TinyMCE 5.3 or above */
 import 'tinymce/icons/default';

 /* A theme is also required */
 import 'tinymce/themes/silver';
 /* Import the skin */
 import 'tinymce/skins/ui/oxide/skin.css';
//https://www.tiny.cloud/blog/fixing-plugin-errors/
 /* Import plugins */
 import 'tinymce/plugins/advlist';
 import 'tinymce/plugins/code';
 import 'tinymce/plugins/emoticons';
 import 'tinymce/plugins/emoticons/js/emojis';
 import 'tinymce/plugins/link';
 import 'tinymce/plugins/lists';
 import 'tinymce/plugins/table';
 import 'tinymce/plugins/wordcount';
 import 'tinymce/plugins/autolink';
 import 'tinymce/plugins/autosave';
 import 'tinymce/plugins/save';
 import 'tinymce/plugins/image';
 import 'tinymce/plugins/insertdatetime';
 import 'tinymce/plugins/visualblocks';
 import 'tinymce/plugins/searchreplace';
 import 'tinymce/plugins/media';
 import 'tinymce/plugins/quickbars';
 import 'tinymce/plugins/preview';
 import 'tinymce/plugins/pagebreak';
 import 'tinymce/plugins/anchor';
 import 'tinymce/plugins/nonbreaking';
 import 'tinymce/plugins/accordion';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/visualchars';

@Component({
  tag: 'feedback-form',
  styleUrl: 'feedback-form.css',
  shadow: true,
})
export class FeedbackForm {
  private editor: any; // Store a reference to the TinyMCE editor instance
  private _targetRef: HTMLElement;
 
  @Prop({ mutable: true, reflect: true }) initialValue: string;
  //to control whether the tinymce editor is editable
  @Prop() disabled: boolean = false; 
  @Prop() disableQuickbars: boolean = false;
/**
   * Optional placeholder text displayed when the form field is empty.
   */
  @Prop({ mutable: true }) placeholder: string;
  @Prop() fontFamily: string = 'Calibri'; // Default font family doesnt work when initialvalue has font
  @Prop() fontSize: string; // Default font size prop
  @Element() el: HTMLElement;

  @Event() valueChange: EventEmitter<string>;
  @Event() editorFocus: EventEmitter<void>;
  @Event() editorBlur: EventEmitter<void>;
  @Event() contentChanged: EventEmitter<any>;

  uploadControlConfig = {
    primaryButtonConfig: {
      label: 'Upload',
    },
    secondaryButtonConfig: {
      label: 'Clear',
    },
  };
//https://fluid.libertymutual.com/fluid/fluid-file-upload.html
  fileListUpdated(event) {
    console.log(event.detail);
  }
//https://fluid-components.libertymutual.com/fluid/fluid-file-upload.html
  uploadClicked(event) {
    console.log(event.detail);
  }

  @Watch('value')
  onValueChange(newValue: string) {
    if (this.editor && this.editor.getContent() !== newValue) {
      this.editor.setContent(newValue);
    }
  }
  @Watch('fontFamily')
  watchFontFamily(newValue: string) {
    if (this.editor) {
      this.editor.execCommand('FontName', false, newValue);
    }
  }
    // Watch for changes to fontSize
 @Watch('fontSize')
 watchFontSizeHandler(newValue: string) {
   if (this.editor) {
     this.editor.execCommand('fontSize', false, newValue);
   }
 }
   //initialize TinyMCE properly within your component. lifecycle method
   componentDidLoad() {
    this.initTinyMCE();
   }

   initTinyMCE() {
     // Check if editor is already initialized
     if (!this.editor) {
      tinymce.init({
        //Create a configuration object for TinyMCE. Customize it according to your needs:
       // selector: 'textarea',
       target: this._targetRef,  // HTML element convert into a TinyMCE editor.
        placeholder: this.placeholder,
        promotion: false, //hides the Upgrade promotion button
        license_key: 'gpl',
        highlight_on_focus: false,
        browser_spellcheck: true,
        //HTML custom font options
      font_size_formats: '2pt 4pt 6pt 8pt 9pt 10pt 11pt 12pt 14pt 18pt 20pt 22pt 24pt 26pt 28pt 30pt 32pt 34pt 36pt 48pt 60pt 72pt 96pt', 
      width:'100%',
       height: 350,
      //  resize:'both', //https://www.tiny.cloud/docs/tinymce/latest/editor-size-options/
       theme: 'silver',        // Choose a theme ('modern', 'silver', 'inlite','mobile' etc.)
       //https://www.tiny.cloud/docs/tinymce/latest/editor-skin/
       //skin: 'oxide',
       skin: false,
         //last backslash should not be given in url as it doesnt work in testing
      //and also to make placeholder work in angular and react
     skin_url: 'https://cdn.jsdelivr.net/npm/tinymce@7.4.1/skins/ui/oxide',
        plugins: ["accordion", "autoresize", "charmap", "code", "directionality", "importcss","help", "fullscreen", "codesample", "table",  "link","advlist", "lists","wordcount","autolink","autosave","save","image","insertdatetime","visualblocks","visualchars","searchreplace","media","quickbars","emoticons","preview","pagebreak","anchor","nonbreaking"],
       // block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3',
        branding: false,
         menubar: 'file edit view insert format tools table tc help',
         toolbar: "undo redo | formatselect  | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
       
         //paste Core plugin options
        paste_block_drop: false,
        paste_data_images: true,
        paste_as_text: false, // Keep this false to retain formatting
        valid_elements: '*[*]', // Allow all elements and attributes   
        allow_html_in_named_anchor: true,
        emoticons_append: {
          custom_mind_explode: {
            keywords: [ 'brain', 'mind', 'explode', 'blown' ],
            char: '🤯',
            category: 'Genius'
          },
          robot: {
            keywords: [ 'computer', 'machine', 'bot' ],
            char: '🤖',
            category: 'AI'
          },
          dog: {
            keywords: [ 'animal', 'friend', 'nature', 'woof', 'puppy', 'pet', 'faithful' ],
            char: '🐶',
            category: 'Nature'
          }
        },
      
    
       importcss_append: true,
      toolbar_mode: 'sliding',
       image_title: true,
        help_accessibility: false,
        image_advtab: true,
        min_height: 350,
        max_height: 400,
       quickbars_insert_toolbar: this.disableQuickbars
       ? false // Disable the quickbars insert toolbar if the prop is true
       : 'quicktable image media codesample',
       quickbars_selection_toolbar: this.disableQuickbars
       ? false // Disable the quickbars selection toolbar if the prop is true
       : 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
      
        font_family_formats: `Calibri=Calibri, sans-serif;
        Andale Mono=andale mono,times;
        Arial=arial,helvetica,sans-serif; 
        Arial Black=arial black,avant garde;
        Noto Serif Devanagari=Noto Serif Devanagari", serif;
        Book Antiqua=book antiqua,palatino; 
        Comic Sans MS=comic sans ms,sans-serif; 
        Courier New=courier new,courier,monospace;
        Lato Black=lato; 
        Roboto=Roboto, sans-serif;
        Bungee=Bungee;
        Open Sans='Open Sans', sans-serif;
        Lora=Lora, serif;
        Montserrat=Montserrat, sans-serif;
        Garamond=Garamond, serif;
        EB Garamond='EB Garamond', serif;
        Poppins=Poppins;
        Georgia=georgia,palatino; 
        Helvetica=helvetica;
        Impact=impact,chicago; 
        Oswald=Oswald, sans-serif;
        Symbol=symbol;
        Tahoma=tahoma,arial,helvetica,sans-serif; 
        Terminal=terminal,monaco;
        Times New Roman=times new roman,times; 
        Trebuchet MS=trebuchet ms,geneva; 
        Verdana=verdana,geneva; 
        Webdings=webdings; 
        Josefin='Josefin Sans', sans-serif; 
        Wingdings=wingdings,zapf dingbats`,
        content_css: 'https://cdn.jsdelivr.net/npm/tinymce@7.4.1/skins/ui/oxide/content.min.css',
        //  content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
        //https://www.tiny.cloud/blog/tinymce-css-and-custom-styles/
       content_style: `
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Roboto&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Garamond&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
       @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');
       @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@100..900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
      }
      `,
      
        mobile: {
          theme: 'silver',
          width:'100%',
          height: 350,
          menubar: true,
          plugins: ['autosave', 'lists', 'autolink','table', 'link', 'advlist', 'code'],
          toolbar: 'undo bold italic styleselect fontfamily fontsize',
        },
        //setup callback assigns the editor 
        setup: (editor) => {
          this.editor = editor; // Store the editor instance
          editor.on('init', () => {
            //https://www.tiny.cloud/docs/tinymce/latest/editor-command-identifiers/
            editor.execCommand('FontName', false, this.fontFamily);
            //https://www.tiny.cloud/blog/tinymce-exec-commands/
          //https://stackoverflow.com/questions/5868295/document-execcommand-fontsize-in-pixels
          editor.execCommand('fontSize', false, this.fontSize);
          });
          editor.on('change keyup', () => {
            const content = editor.getContent();
            this.valueChange.emit(content);
          });
  
          editor.on('keyup', () => {
            console.log('Editor was clicked');
        });
         // Add an event listener for the input event
         editor.on('input', () => {
          this.handleEditorInput();
        });
        editor.on('change', () => {
          console.log('Editor on change');
          this.contentChanged.emit(editor.getContent());
        });
  
        editor.on('focus', () => {
          this.editorFocus.emit();
        });
  
        editor.on('blur', () => {
          this.editorBlur.emit();
           tinymce.triggerSave();
          console.log('Trigger save working');
        });
        //https://www.tiny.cloud/docs/tinymce/latest/apis/tinymce.editormode/#set
        //https://stackoverflow.com/questions/13881812/make-readonly-disable-tinymce-textarea
        if (this.disabled) {
          editor.mode.set('readonly');
        }
        },
      });
    
    
    }
   }
 
     // Custom logic to handle input events
     handleEditorInput() {
       // Access the content of the editor
       const editorContent = this.editor.getContent();
       // Implement your custom logic here
       console.log('Editor content on input changed:', editorContent);
     }
   @Listen('input', { target: 'document' })
   handleInput() {
     // Handle input events if needed
   }
   @State() editorContent: string = '';
  @State() responseMessage: string = '';
  @State() userName: string = ''; // State to capture user's name
  @State() userEmail: string = ''; // State to capture user's email
  @State() fileUploaded: any = ''; // State to capture user's uploaded document
  handleInputChange(event: Event, field: 'name' | 'email') {
    const input = event.target as HTMLInputElement;
    if (field === 'name') {
      this.userName = input.value;
    } else if (field === 'email') {
      this.userEmail = input.value;
    } else if (field === 'file') {
      this.fileUploaded = input.value;
    }
  }
   //Before performing any operations- GET or SET- ensure that the this.editor instance is available
  //send email also without backend
   async getContentFromEditor() {
     if (this.editor) {
       // Access properties or methods of the TinyMCE editor instance
       this.editorContent = this.editor.getContent();
       console.log('Content from TinyMCE editor:', this.editorContent);
       try {
        const response = await fetch('https://reqres.in/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({  name: this.userName,email:this.userEmail,file:this.fileUploaded,content: this.editorContent }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to submit content');
        }
  
        const result = await response.json();
        this.responseMessage = 'Content submitted successfully!';
        console.log('Response:', result);
      } catch (error) {
        console.error('Error:', error);
        this.responseMessage = 'Submission failed!';
      }

       // Ensure all required fields are filled
    if (!this.userName || !this.userEmail || !this.editorContent) {
      alert('Please fill out first 3 fields before submitting.');
      return;
    }
       // Call EmailJS to send the email (Browser based or client based)
       //Emailjs dashboard: https://dashboard.emailjs.com/sign-up
       //templateParams is this.editorContent
       //Template ID not found: https://dashboard.emailjs.com/admin/templates
    emailjs.send(
      'service_2q5gm3h', // Email service ID from EmailJS dashboard
      'template_szeawas', // Template ID from EmailJS dashboard
      { user_name: this.userName,
        user_email: this.userEmail,
        content: this.editorContent }, // Template parameters (the content of the email)
      {
        publicKey: 'IRGsyXDXq7ZJHMbzF',
      }// Your user ID from EmailJS: YOUR_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent successfully',  response.status, response.text);
      alert('Email sent successfully!');
   
      // Sending auto-reply email
      emailjs
      .send(
        'service_2q5gm3h', // Your EmailJS service ID
        'template_57gcu0o', // Auto-reply template ID
        {
          user_name: this.userName,
          user_email: this.userEmail,
        },
        'IRGsyXDXq7ZJHMbzF' // Your EmailJS user ID
      )
      .then((response) => {
        console.log('Auto-reply email sent successfully', response);
        alert('Feedback sent, and an auto-reply email was sent to the user!');
      })
      .catch((error) => {
        console.error('Error sending auto-reply email', error);
      });

    })  //this is first feedback then endinng parantheses, auto-reply is placed inside this  above
    .catch((error) => {
      console.error('Error sending email', error);
      alert('Failed to send email');
    });
     } else {
       console.error('TinyMCE editor instance not available.');
       return null;
     }
   }
 
   setContentInEditor(newContent: string) {
     if (this.editor) {
       this.editor.setContent(newContent);
       console.log('Content set in TinyMCE editor:', newContent);
     } else {
       console.error('TinyMCE editor instance not available.');
     }
   }
   handleEvent() {
     this.contentChanged.emit({ detail: 'some data' });
   }
   //componentDidUnload() deprecated
   disconnectedCallback() {
     const el : any =   this._targetRef;
     tinymce.remove(el);
     this.editor = null; // Clear the reference during component unload
   }
  
  render() {
    let editorId = `editor-${Math.floor(Math.random() * 1000)}`;
    return (
      <div>
      <h1>Feedback Form</h1>
      <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            onInput={(event) => this.handleInputChange(event, 'name')}
          required/>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            onInput={(event) => this.handleInputChange(event, 'email')}
            required/>
        </label>
        <br />
        <label>
          Please provide your feedback:
      <div 
      id={editorId}
      ref={(el: HTMLElement) => (this._targetRef = el)}
       innerHTML={this.initialValue}
       aria-disabled={this.disabled}
       aria-placeholder={this.placeholder}></div>
       </label>
       <fluid-file-upload
       uploadControlConfig="uploadControlConfig"
       fileListUpdated="fileListUpdated($event)"
       uploadClicked="uploadClicked($event)"
       showFileList="false">
       </fluid-file-upload>
      <button onClick={() => this.getContentFromEditor()}>Submit</button>
      <button onClick={() => this.setContentInEditor('')}>Clear Content</button>
    </div>
    );
  }
}
