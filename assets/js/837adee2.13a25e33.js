"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2120],{3719:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=i(74848),o=i(28453),s=i(11470),r=i(19365);const a={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/llm_configuration.ipynb",source_notebook:"/website/docs/topics/llm_configuration.ipynb",title:"LLM Configuration"},l="LLM Configuration",c={id:"topics/llm_configuration",title:"LLM Configuration",description:"Open In Colab",source:"@site/docs/topics/llm_configuration.mdx",sourceDirName:"topics",slug:"/topics/llm_configuration",permalink:"/autogen/docs/topics/llm_configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/llm_configuration.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/llm_configuration.ipynb",source_notebook:"/website/docs/topics/llm_configuration.ipynb",title:"LLM Configuration"},sidebar:"docsSidebar",previous:{title:"Agent Observability",permalink:"/autogen/docs/topics/llm-observability"},next:{title:"ReAct",permalink:"/autogen/docs/topics/prompting-and-reasoning/react"}},d={},h=[{value:"Introduction to <code>config_list</code>",id:"introduction-to-config_list",level:2},{value:"<code>OAI_CONFIG_LIST</code> pattern",id:"oai_config_list-pattern",level:3},{value:"Why is it a list?",id:"why-is-it-a-list",level:3},{value:"How does an agent decide which model to pick out of the list?",id:"how-does-an-agent-decide-which-model-to-pick-out-of-the-list",level:3},{value:"Config list filtering",id:"config-list-filtering",level:3},{value:"Tags",id:"tags",level:4},{value:"Adding http client in llm_config for proxy",id:"adding-http-client-in-llm_config-for-proxy",level:3},{value:"Using Azure Active Directory (AAD) Authentication",id:"using-azure-active-directory-aad-authentication",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Step 1: Register an Application in AAD",id:"step-1-register-an-application-in-aad",level:4},{value:"Step 2: Configure API Permissions",id:"step-2-configure-api-permissions",level:4},{value:"Step 3: Obtain Client ID and Tenant ID",id:"step-3-obtain-client-id-and-tenant-id",level:4},{value:"Step 4: Configure Your Application",id:"step-4-configure-your-application",level:4},{value:"Step 5: Authenticate and Acquire Tokens",id:"step-5-authenticate-and-acquire-tokens",level:4},{value:"Step 6: Configure Azure OpenAI with AAD Auth in AutoGen",id:"step-6-configure-azure-openai-with-aad-auth-in-autogen",level:4},{value:"Example of Initializing an Assistant Agent with AAD Auth",id:"example-of-initializing-an-assistant-agent-with-aad-auth",level:4},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Other configuration parameters",id:"other-configuration-parameters",level:2},{value:"AutoGen specific parameters",id:"autogen-specific-parameters",level:3},{value:"Extra model client parameters",id:"extra-model-client-parameters",level:3},{value:"Example",id:"example",level:2},{value:"Other helpers for loading a config list",id:"other-helpers-for-loading-a-config-list",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"llm-configuration",children:"LLM Configuration"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/topics/llm_configuration.ipynb",children:(0,t.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/topics/llm_configuration.ipynb",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,t.jsxs)(n.p,{children:["In AutoGen, agents use LLMs as key components to understand and react.\nTo configure an agent\u2019s access to LLMs, you can specify an ",(0,t.jsx)(n.code,{children:"llm_config"}),"\nargument in its constructor. For example, the following snippet shows a\nconfiguration that uses ",(0,t.jsx)(n.code,{children:"gpt-4"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\n\nllm_config = {\n    "config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}],\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"It is important to never commit secrets into your code, therefore we read the OpenAI API key from an environment variable."})}),"\n",(0,t.jsxs)(n.p,{children:["This ",(0,t.jsx)(n.code,{children:"llm_config"})," can then be passed to an agent\u2019s constructor to enable\nit to use the LLM."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import autogen\n\nassistant = autogen.AssistantAgent(name="assistant", llm_config=llm_config)\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"introduction-to-config_list",children:["Introduction to ",(0,t.jsx)(n.code,{children:"config_list"})]}),"\n",(0,t.jsxs)(n.p,{children:["Different tasks may require different models, and the ",(0,t.jsx)(n.code,{children:"config_list"}),"\nallows specifying the different endpoints and configurations that are to\nbe used. It is a list of dictionaries, each of which contains the\nfollowing keys depending on the kind of endpoint being used:"]}),"\n","\n","\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(r.A,{value:"openai",label:"OpenAI",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"model"})," (str, required): The identifier of the model to be used, such as 'gpt-4', 'gpt-3.5-turbo'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_key"})," (str, optional): The API key required for authenticating requests to the model's API endpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_rate_limit"})," (float, optional): Specifies the maximum number of API requests permitted per second."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"base_url"})," (str, optional): The base URL of the API endpoint. This is the root address where API calls are directed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tags"})," (List[str], optional): Tags which can be used for filtering."]}),"\n"]}),(0,t.jsx)(n.p,{children:"Example:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "model": "gpt-4",\n    "api_key": os.environ[\'OPENAI_API_KEY\']\n    "api_rate_limit": 60.0, // Set to allow up to 60 API requests per second.\n  }\n]\n'})})]}),(0,t.jsxs)(r.A,{value:"azureopenai",label:"Azure OpenAI",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"model"})," (str, required): The deployment to be used. The model corresponds to the deployment name on Azure OpenAI."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_key"})," (str, optional): The API key required for authenticating requests to the model's API endpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_type"}),": ",(0,t.jsx)(n.code,{children:"azure"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_rate_limit"})," (float, optional): Specifies the maximum number of API requests permitted per second."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"base_url"})," (str, optional): The base URL of the API endpoint. This is the root address where API calls are directed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_version"})," (str, optional): The version of the Azure API you wish to use."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tags"})," (List[str], optional): Tags which can be used for filtering."]}),"\n"]}),(0,t.jsx)(n.p,{children:"Example:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "model": "my-gpt-4-deployment",\n    "api_type": "azure",\n    "api_key": os.environ[\'AZURE_OPENAI_API_KEY\'],\n    "base_url": "https://ENDPOINT.openai.azure.com/",\n    "api_version": "2024-02-01"\n  }\n]\n'})})]}),(0,t.jsxs)(r.A,{value:"other",label:"Other OpenAI compatible",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"model"})," (str, required): The identifier of the model to be used, such as 'llama-7B'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_key"})," (str, optional): The API key required for authenticating requests to the model's API endpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_rate_limit"})," (float, optional): Specifies the maximum number of API requests permitted per second."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"base_url"})," (str, optional): The base URL of the API endpoint. This is the root address where API calls are directed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tags"})," (List[str], optional): Tags which can be used for filtering."]}),"\n"]}),(0,t.jsx)(n.p,{children:"Example:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "model": "llama-7B",\n    "base_url": "http://localhost:1234"\n  }\n]\n'})})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["By default this will create a model client which assumes an OpenAI API (or compatible) endpoint. To use custom model clients, see ",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_custom_model.ipynb",children:"here"}),"."]})}),"\n",(0,t.jsxs)(n.h3,{id:"oai_config_list-pattern",children:[(0,t.jsx)(n.code,{children:"OAI_CONFIG_LIST"})," pattern"]}),"\n",(0,t.jsxs)(n.p,{children:["A common, useful pattern used is to define this ",(0,t.jsx)(n.code,{children:"config_list"})," is via\nJSON (specified as a file or an environment variable set to a\nJSON-formatted string) and then use the\n",(0,t.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_from_json",children:(0,t.jsx)(n.code,{children:"config_list_from_json"})}),"\nhelper function to load it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'config_list = autogen.config_list_from_json(\n    env_or_file="OAI_CONFIG_LIST",\n)\n\n# Then, create the assistant agent with the config list\nassistant = autogen.AssistantAgent(name="assistant", llm_config={"config_list": config_list})\n'})}),"\n",(0,t.jsx)(n.p,{children:"This can be helpful as it keeps all the configuration in one place\nacross different projects or notebooks."}),"\n",(0,t.jsxs)(n.p,{children:["This function interprets the ",(0,t.jsx)(n.code,{children:"env_or_file"})," argument as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"env_or_file"})," is an environment variable then:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It will first try to load the file from the path specified in\nthe environment variable."}),"\n",(0,t.jsx)(n.li,{children:"If there is no file, it will try to interpret the environment\nvariable as a JSON string."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Otherwise, it will try to open the file at the path specified by\n",(0,t.jsx)(n.code,{children:"env_or_file"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"why-is-it-a-list",children:"Why is it a list?"}),"\n",(0,t.jsx)(n.p,{children:"Being a list allows you to define multiple models that can be used by\nthe agent. This is useful for a few reasons:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If one model times out or fails, the agent can try another model."}),"\n",(0,t.jsxs)(n.li,{children:["Having a single global list of models and ",(0,t.jsx)(n.a,{href:"#config-list-filtering",children:"filtering\nit"})," based on certain keys (e.g.\xa0name, tag)\nin order to pass select models into a certain agent (e.g.\xa0use\ncheaper GPT 3.5 for agents solving easier tasks)"]}),"\n",(0,t.jsxs)(n.li,{children:["While the core agents, (e.g.\xa0conversable or assistant) do not have\nspecial logic around selecting configs, some of the specialized\nagents ",(0,t.jsx)(n.em,{children:"may"})," have logic to select the best model based on the task\nat hand."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-does-an-agent-decide-which-model-to-pick-out-of-the-list",children:"How does an agent decide which model to pick out of the list?"}),"\n",(0,t.jsx)(n.p,{children:"An agent uses the very first model available in the \u201cconfig_list\u201d and\nmakes LLM calls against this model. If the model fails (e.g.\xa0API\nthrottling) the agent will retry the request against the 2nd model and\nso on until prompt completion is received (or throws an error if none of\nthe models successfully completes the request). In general there\u2019s no\nimplicit/hidden logic inside agents that is used to pick \u201cthe best model\nfor the task\u201d. However, some specialized agents may attempt to choose\n\u201cthe best model for the task\u201d. It is developers responsibility to pick\nthe right models and use them with agents."}),"\n",(0,t.jsx)(n.h3,{id:"config-list-filtering",children:"Config list filtering"}),"\n",(0,t.jsx)(n.p,{children:"As described above the list can be filtered based on certain criteria.\nThis is defined as a dictionary of key to filter on and values to filter\nby. For example, if you have a list of configs and you want to select\nthe one with the model \u201cgpt-3.5-turbo\u201d you can use the following filter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'filter_dict = {"model": ["gpt-3.5-turbo"]}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This can then be applied to a config list loaded in Python with\n",(0,t.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#filter_config",children:(0,t.jsx)(n.code,{children:"filter_config"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"config_list = autogen.filter_config(config_list, filter_dict)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or, directly when loading the config list using\n",(0,t.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_from_json",children:(0,t.jsx)(n.code,{children:"config_list_from_json"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'config_list = autogen.config_list_from_json(env_or_file="OAI_CONFIG_LIST", filter_dict=filter_dict)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"tags",children:"Tags"}),"\n",(0,t.jsxs)(n.p,{children:["Model names can differ between OpenAI and Azure OpenAI, so tags offer an\neasy way to smooth over this inconsistency. Tags are a list of strings\nin the ",(0,t.jsx)(n.code,{children:"config_list"}),", for example for the following ",(0,t.jsx)(n.code,{children:"config_list"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'config_list = [\n    {"model": "my-gpt-4-deployment", "api_key": "", "tags": ["gpt4", "openai"]},\n    {"model": "llama-7B", "base_url": "http://127.0.0.1:8080", "tags": ["llama", "local"]},\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then when filtering the ",(0,t.jsx)(n.code,{children:"config_list"})," you can can specify the desired\ntags. A config is selected if it has at least one of the tags specified\nin the filter. For example, to just get the ",(0,t.jsx)(n.code,{children:"llama"})," model, you can use\nthe following filter:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'filter_dict = {"tags": ["llama", "another_tag"]}\nconfig_list = autogen.filter_config(config_list, filter_dict)\nassert len(config_list) == 1\n'})}),"\n",(0,t.jsx)(n.h3,{id:"adding-http-client-in-llm_config-for-proxy",children:"Adding http client in llm_config for proxy"}),"\n",(0,t.jsxs)(n.p,{children:["In Autogen, a deepcopy is used on llm_config to ensure that the\nllm_config passed by user is not modified internally. You may get an\nerror if the llm_config contains objects of a class that do not support\ndeepcopy. To fix this, you need to implement a ",(0,t.jsx)(n.code,{children:"__deepcopy__"})," method for\nthe class."]}),"\n",(0,t.jsxs)(n.p,{children:["The below example shows how to implement a ",(0,t.jsx)(n.code,{children:"__deepcopy__"})," method for\nhttp client and add a proxy."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'#!pip install httpx\nimport httpx\n\n\nclass MyHttpClient(httpx.Client):\n    def __deepcopy__(self, memo):\n        return self\n\n\nconfig_list = [\n    {\n        "model": "my-gpt-4-deployment",\n        "api_key": "",\n        "http_client": MyHttpClient(proxy="http://localhost:8030"),\n    }\n]\n\nllm_config = {\n    "config_list": config_list,\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-azure-active-directory-aad-authentication",children:"Using Azure Active Directory (AAD) Authentication"}),"\n",(0,t.jsx)(n.p,{children:"Azure Active Directory (AAD) provides secure access to resources and\napplications. Follow the steps below to configure AAD authentication for\nAutogen."}),"\n",(0,t.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An Azure subscription - ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/free/",children:"Create one for\nfree"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Access granted to the Azure OpenAI Service in the desired Azure\nsubscription."}),"\n",(0,t.jsx)(n.li,{children:"Appropriate permissions to register an application in AAD."}),"\n",(0,t.jsx)(n.li,{children:"Custom subdomain names are required to enable features like\nMicrosoft Entra ID for authentication."}),"\n",(0,t.jsxs)(n.li,{children:["Azure CLI - ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/cli/azure/install-azure-cli",children:"Installation\nGuide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more detailed and up-to-date instructions, please refer to the\nofficial ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/",children:"Azure OpenAI\ndocumentation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"step-1-register-an-application-in-aad",children:"Step 1: Register an Application in AAD"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/get-started/azure-portal",children:"Azure\nportal"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Azure Active Directory"})," > ",(0,t.jsx)(n.code,{children:"App registrations"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"New registration"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Enter a name for your application."}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"Redirect URI"})," (optional)."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Register"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For detailed instructions, refer to the official ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate",children:"Azure AD Quickstart\ndocumentation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"step-2-configure-api-permissions",children:"Step 2: Configure API Permissions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["After registration, go to ",(0,t.jsx)(n.code,{children:"API permissions"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Add a permission"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Microsoft Graph"})," and then ",(0,t.jsx)(n.code,{children:"Delegated permissions"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the necessary permissions (e.g., ",(0,t.jsx)(n.code,{children:"User.Read"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, see ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview",children:"API permissions in Microsoft\nGraph"})]}),"\n",(0,t.jsx)(n.h4,{id:"step-3-obtain-client-id-and-tenant-id",children:"Step 3: Obtain Client ID and Tenant ID"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Overview"})," of your registered application."]}),"\n",(0,t.jsxs)(n.li,{children:["Note down the ",(0,t.jsx)(n.code,{children:"Application (client) ID"})," and ",(0,t.jsx)(n.code,{children:"Directory (tenant) ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, visit ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate",children:"Register an application with the Microsoft\nidentity\nplatform"})]}),"\n",(0,t.jsx)(n.h4,{id:"step-4-configure-your-application",children:"Step 4: Configure Your Application"}),"\n",(0,t.jsxs)(n.p,{children:["Use the obtained ",(0,t.jsx)(n.code,{children:"Client ID"})," and ",(0,t.jsx)(n.code,{children:"Tenant ID"})," in your application\nconfiguration. Here\u2019s an example of how to do this in your configuration\nfile:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'aad_config = {\n    "client_id": "YOUR_CLIENT_ID",\n    "tenant_id": "YOUR_TENANT_ID",\n    "authority": "https://login.microsoftonline.com/YOUR_TENANT_ID",\n    "scope": ["https://graph.microsoft.com/.default"],\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"step-5-authenticate-and-acquire-tokens",children:"Step 5: Authenticate and Acquire Tokens"}),"\n",(0,t.jsx)(n.p,{children:"Use the following code to authenticate and acquire tokens:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'from msal import ConfidentialClientApplication\n\napp = ConfidentialClientApplication(\n    client_id=aad_config["client_id"],\n    client_credential="YOUR_CLIENT_SECRET",\n    authority=aad_config["authority"]\n)\n\nresult = app.acquire_token_for_client(scopes=aad_config["scope"])\n\nif "access_token" in result:\n    print("Token acquired")\nelse:\n    print("Error acquiring token:", result.get("error"))\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For more details, refer to the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-authenticate-authorize-azure-openai",children:"Authenticate and authorize in Azure\nOpenAI\nService"}),"\nand ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/managed-identity",children:"How to configure Azure OpenAI Service with Microsoft Entra ID\nauthentication"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"step-6-configure-azure-openai-with-aad-auth-in-autogen",children:"Step 6: Configure Azure OpenAI with AAD Auth in AutoGen"}),"\n",(0,t.jsxs)(n.p,{children:["To use AAD authentication with Azure OpenAI in AutoGen, configure the\n",(0,t.jsx)(n.code,{children:"llm_config"})," with the necessary parameters."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'llm_config = {\n    "config_list": [\n        {\n            "model": "gpt-4",\n            "base_url": "YOUR_BASE_URL",\n            "api_type": "azure",\n            "api_version": "2024-02-01",\n            "max_tokens": 1000,\n            "azure_ad_token_provider": "DEFAULT"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For more details, refer to the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-authenticate-authorize-azure-openai",children:"Authenticate and authorize in Azure\nOpenAI\nService"}),"\nand ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/managed-identity",children:"How to configure Azure OpenAI Service with Microsoft Entra ID\nauthentication"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In this configuration: - ",(0,t.jsx)(n.code,{children:"model"}),": The Azure OpenAI deployment name. -\n",(0,t.jsx)(n.code,{children:"base_url"}),": The base URL of the Azure OpenAI endpoint. - ",(0,t.jsx)(n.code,{children:"api_type"}),":\nShould be set to \u201cazure\u201d. - ",(0,t.jsx)(n.code,{children:"api_version"}),": The API version to use. -\n",(0,t.jsx)(n.code,{children:"azure_ad_token_provider"}),": Set to \u201cDEFAULT\u201d to use the default token\nprovider."]}),"\n",(0,t.jsx)(n.h4,{id:"example-of-initializing-an-assistant-agent-with-aad-auth",children:"Example of Initializing an Assistant Agent with AAD Auth"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'import autogen\n\n# Initialize the assistant agent with the AAD authenticated config\nassistant = autogen.AssistantAgent(name="assistant", llm_config=llm_config)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter issues, check the following: - Ensure your ",(0,t.jsx)(n.code,{children:"Client ID"}),"\nand ",(0,t.jsx)(n.code,{children:"Tenant ID"})," are correct. - Verify the permissions granted to your\napplication. - Check network connectivity and Azure service status."]}),"\n",(0,t.jsx)(n.p,{children:"This documentation provides a complete guide to configure and use AAD\nauthentication with Azure OpenAI in the AutoGen."}),"\n",(0,t.jsx)(n.h2,{id:"other-configuration-parameters",children:"Other configuration parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Besides the ",(0,t.jsx)(n.code,{children:"config_list"}),", there are other parameters that can be used\nto configure the LLM. These are split between parameters specifically\nused by Autogen and those passed into the model client."]}),"\n",(0,t.jsx)(n.h3,{id:"autogen-specific-parameters",children:"AutoGen specific parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cache_seed"})," - This is a legacy parameter and not recommended to be\nused unless the reason for using it is to disable the default\ncaching behavior. To disable default caching, set this to ",(0,t.jsx)(n.code,{children:"None"}),".\nOtherwise, by default or if an int is passed the\n",(0,t.jsx)(n.a,{href:"../../docs/reference/cache/disk_cache",children:"DiskCache"})," will be used. For\nthe new way of using caching, pass a\n",(0,t.jsx)(n.a,{href:"../../docs/reference/cache/",children:"Cache"})," object into\n",(0,t.jsx)(n.a,{href:"../../docs/reference/agentchat/conversable_agent#initiate_chat",children:(0,t.jsx)(n.code,{children:"initiate_chat"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"extra-model-client-parameters",children:"Extra model client parameters"}),"\n",(0,t.jsxs)(n.p,{children:["It is also possible to passthrough parameters through to the OpenAI\nclient. Parameters that correspond to the ",(0,t.jsxs)(n.a,{href:"https://github.com/openai/openai-python/blob/d231d1fa783967c1d3a1db3ba1b52647fff148ac/src/openai/_client.py#L67",children:[(0,t.jsx)(n.code,{children:"OpenAI"}),"\nclient"]}),"\nor the ",(0,t.jsxs)(n.a,{href:"https://github.com/openai/openai-python/blob/d231d1fa783967c1d3a1db3ba1b52647fff148ac/src/openai/resources/completions.py#L35",children:[(0,t.jsx)(n.code,{children:"OpenAI"})," completions create\nAPI"]}),"\ncan be supplied."]}),"\n",(0,t.jsxs)(n.p,{children:["This is commonly used for things like ",(0,t.jsx)(n.code,{children:"temperature"}),", or ",(0,t.jsx)(n.code,{children:"timeout"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'llm_config = {\n    "config_list": [\n        {\n            "model": "my-gpt-4-deployment",\n            "api_key": os.environ.get("AZURE_OPENAI_API_KEY"),\n            "api_type": "azure",\n            "base_url": os.environ.get("AZURE_OPENAI_API_BASE"),\n            "api_version": "2024-02-01",\n        },\n        {\n            "model": "llama-7B",\n            "base_url": "http://127.0.0.1:8080",\n            "api_type": "openai",\n        },\n    ],\n    "temperature": 0.9,\n    "timeout": 300,\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"other-helpers-for-loading-a-config-list",children:"Other helpers for loading a config list"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#get_config_list",children:(0,t.jsx)(n.code,{children:"get_config_list"})}),":\nGenerates configurations for API calls, primarily from provided API\nkeys."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_openai_aoai",children:(0,t.jsx)(n.code,{children:"config_list_openai_aoai"})}),":\nConstructs a list of configurations using both Azure OpenAI and\nOpenAI endpoints, sourcing API keys from environment variables or\nlocal files."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_from_models",children:(0,t.jsx)(n.code,{children:"config_list_from_models"})}),":\nCreates configurations based on a provided list of models, useful\nwhen targeting specific models without manually specifying each\nconfiguration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../../docs/reference/oai/openai_utils#config_list_from_dotenv",children:(0,t.jsx)(n.code,{children:"config_list_from_dotenv"})}),":\nConstructs a configuration list from a ",(0,t.jsx)(n.code,{children:".env"})," file, offering a\nconsolidated way to manage multiple API configurations and keys from\na single file."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/config_loader_utility_functions.ipynb",children:"this\nnotebook"}),"\nfor examples of using the above functions."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var t=i(18215);const o={tabItem:"tabItem_Ymn6"};var s=i(74848);function r(e){let{children:n,hidden:i,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,r),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>y});var t=i(96540),o=i(18215),s=i(23104),r=i(56347),a=i(205),l=i(57485),c=i(31682),d=i(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:o}}=e;return{value:n,label:i,attributes:t,default:o}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:i}=e;const o=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:o}=e,s=u(e),[r,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,h]=f({queryString:i,groupId:o}),[g,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(i);return[o,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:o}),x=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=i(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=i(74848);function _(e){let{className:n,block:i,selectedValue:t,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),o=a[i].value;o!==t&&(c(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,o.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:o}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function A(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,j.jsx)(_,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,j.jsx)(A,{...e,children:h(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);