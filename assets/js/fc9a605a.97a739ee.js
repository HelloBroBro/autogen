"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3292],{76856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(74848),s=t(28453);const i={},o="Multi-agent Conversation Framework",r={id:"Use-Cases/agent_chat",title:"Multi-agent Conversation Framework",description:"AutoGen offers a unified multi-agent conversation framework as a high-level abstraction of using foundation models. It features capable, customizable and conversable agents which integrate LLMs, tools, and humans via automated agent chat.",source:"@site/docs/Use-Cases/agent_chat.md",sourceDirName:"Use-Cases",slug:"/Use-Cases/agent_chat",permalink:"/autogen/docs/Use-Cases/agent_chat",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Use-Cases/agent_chat.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"What Next?",permalink:"/autogen/docs/tutorial/what-next"},next:{title:"Enhanced Inference",permalink:"/autogen/docs/Use-Cases/enhanced_inference"}},c={},l=[{value:"Agents",id:"agents",level:3},{value:"Multi-agent Conversations",id:"multi-agent-conversations",level:2},{value:"A Basic Two-Agent Conversation Example",id:"a-basic-two-agent-conversation-example",level:3},{value:"Supporting Diverse Conversation Patterns",id:"supporting-diverse-conversation-patterns",level:3},{value:"Conversations with different levels of autonomy, and human-involvement patterns",id:"conversations-with-different-levels-of-autonomy-and-human-involvement-patterns",level:4},{value:"Static and dynamic conversations",id:"static-and-dynamic-conversations",level:4},{value:"Diverse Applications Implemented with AutoGen",id:"diverse-applications-implemented-with-autogen",level:3},{value:"For Further Reading",id:"for-further-reading",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"multi-agent-conversation-framework",children:"Multi-agent Conversation Framework"}),"\n",(0,a.jsx)(n.p,{children:"AutoGen offers a unified multi-agent conversation framework as a high-level abstraction of using foundation models. It features capable, customizable and conversable agents which integrate LLMs, tools, and humans via automated agent chat.\nBy automating chat among multiple capable agents, one can easily make them collectively perform tasks autonomously or with human feedback, including tasks that require using tools via code."}),"\n",(0,a.jsx)(n.p,{children:"This framework simplifies the orchestration, automation and optimization of a complex LLM workflow. It maximizes the performance of LLM models and overcomes their weaknesses. It enables building next-gen LLM applications based on multi-agent conversations with minimal effort."}),"\n",(0,a.jsx)(n.h3,{id:"agents",children:"Agents"}),"\n",(0,a.jsx)(n.p,{children:"AutoGen abstracts and implements conversable agents\ndesigned to solve tasks through inter-agent conversations. Specifically, the agents in AutoGen have the following notable features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Conversable: Agents in AutoGen are conversable, which means that any agent can send\nand receive messages from other agents to initiate or continue a conversation"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Customizable: Agents in AutoGen can be customized to integrate LLMs, humans, tools, or a combination of them."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The figure below shows the built-in agents in AutoGen.\n",(0,a.jsx)(n.img,{alt:"Agent Chat Example",src:t(55923).A+"",width:"2916",height:"1556"})]}),"\n",(0,a.jsxs)(n.p,{children:["We have designed a generic ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/conversable_agent#conversableagent-objects",children:(0,a.jsx)(n.code,{children:"ConversableAgent"})}),"\nclass for Agents that are capable of conversing with each other through the exchange of messages to jointly finish a task. An agent can communicate with other agents and perform actions. Different agents can differ in what actions they perform after receiving messages. Two representative subclasses are ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/assistant_agent#assistantagent-objects",children:(0,a.jsx)(n.code,{children:"AssistantAgent"})})," and ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/assistant_agent#assistantagent-objects",children:(0,a.jsx)(n.code,{children:"AssistantAgent"})})," is designed to act as an AI assistant, using LLMs by default but not requiring human input or code execution. It could write Python code (in a Python coding block) for a user to execute when a message (typically a description of a task that needs to be solved) is received. Under the hood, the Python code is written by LLM (e.g., GPT-4). It can also receive the execution results and suggest corrections or bug fixes. Its behavior can be altered by passing a new system message. The LLM ",(0,a.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference",children:"inference"})," configuration can be configured via [",(0,a.jsx)(n.code,{children:"llm_config"}),"]."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})})," is conceptually a proxy agent for humans, soliciting human input as the agent's reply at each interaction turn by default and also having the capability to execute code and call functions or tools. The ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})})," triggers code execution automatically when it detects an executable code block in the received message and no human user input is provided. Code execution can be disabled by setting the ",(0,a.jsx)(n.code,{children:"code_execution_config"})," parameter to False. LLM-based response is disabled by default. It can be enabled by setting ",(0,a.jsx)(n.code,{children:"llm_config"})," to a dict corresponding to the ",(0,a.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference",children:"inference"})," configuration. When ",(0,a.jsx)(n.code,{children:"llm_config"})," is set as a dictionary, ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})})," can generate replies using an LLM when code execution is not performed."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The auto-reply capability of ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/conversable_agent#conversableagent-objects",children:(0,a.jsx)(n.code,{children:"ConversableAgent"})})," allows for more autonomous multi-agent communication while retaining the possibility of human intervention.\nOne can also easily extend it by registering reply functions with the ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/conversable_agent#register_reply",children:(0,a.jsx)(n.code,{children:"register_reply()"})})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["In the following code, we create an ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/assistant_agent#assistantagent-objects",children:(0,a.jsx)(n.code,{children:"AssistantAgent"})}),'  named "assistant" to serve as the assistant and a ',(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})}),' named "user_proxy" to serve as a proxy for the human user. We will later employ these two agents to solve a task.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\nfrom autogen import AssistantAgent, UserProxyAgent\nfrom autogen.coding import DockerCommandLineCodeExecutor\n\nconfig_list = [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]\n\n# create an AssistantAgent instance named "assistant" with the LLM configuration.\nassistant = AssistantAgent(name="assistant", llm_config={"config_list": config_list})\n\n# create a UserProxyAgent instance named "user_proxy" with code execution on docker.\ncode_executor = DockerCommandLineCodeExecutor()\nuser_proxy = UserProxyAgent(name="user_proxy", code_execution_config={"executor": code_executor})\n'})}),"\n",(0,a.jsx)(n.h2,{id:"multi-agent-conversations",children:"Multi-agent Conversations"}),"\n",(0,a.jsx)(n.h3,{id:"a-basic-two-agent-conversation-example",children:"A Basic Two-Agent Conversation Example"}),"\n",(0,a.jsx)(n.p,{children:"Once the participating agents are constructed properly, one can start a multi-agent conversation session by an initialization step as shown in the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# the assistant receives a message from the user, which contains the task description\nuser_proxy.initiate_chat(\n    assistant,\n    message="""What date is today? Which big tech stock has the largest year-to-date gain this year? How much is the gain?""",\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["After the initialization step, the conversation could proceed automatically. Find a visual illustration of how the user_proxy and assistant collaboratively solve the above task autonomously below:\n",(0,a.jsx)(n.img,{alt:"Agent Chat Example",src:t(70089).A+"",width:"3840",height:"1664"})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The assistant receives a message from the user_proxy, which contains the task description."}),"\n",(0,a.jsx)(n.li,{children:"The assistant then tries to write Python code to solve the task and sends the response to the user_proxy."}),"\n",(0,a.jsx)(n.li,{children:"Once the user_proxy receives a response from the assistant, it tries to reply by either soliciting human input or preparing an automatically generated reply. If no human input is provided, the user_proxy executes the code and uses the result as the auto-reply."}),"\n",(0,a.jsx)(n.li,{children:"The assistant then generates a further response for the user_proxy. The user_proxy can then decide whether to terminate the conversation. If not, steps 3 and 4 are repeated."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"supporting-diverse-conversation-patterns",children:"Supporting Diverse Conversation Patterns"}),"\n",(0,a.jsx)(n.h4,{id:"conversations-with-different-levels-of-autonomy-and-human-involvement-patterns",children:"Conversations with different levels of autonomy, and human-involvement patterns"}),"\n",(0,a.jsxs)(n.p,{children:["On the one hand, one can achieve fully autonomous conversations after an initialization step. On the other hand, AutoGen can be used to implement human-in-the-loop problem-solving by configuring human involvement levels and patterns (e.g., setting the ",(0,a.jsx)(n.code,{children:"human_input_mode"})," to ",(0,a.jsx)(n.code,{children:"ALWAYS"}),"), as human involvement is expected and/or desired in many applications."]}),"\n",(0,a.jsx)(n.h4,{id:"static-and-dynamic-conversations",children:"Static and dynamic conversations"}),"\n",(0,a.jsx)(n.p,{children:"AutoGen, by integrating conversation-driven control utilizing both programming and natural language, inherently supports dynamic conversations. This dynamic nature allows the agent topology to adapt based on the actual conversation flow under varying input problem scenarios. Conversely, static conversations adhere to a predefined topology. Dynamic conversations are particularly beneficial in complex settings where interaction patterns cannot be predetermined."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Registered auto-reply"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"With the pluggable auto-reply function, one can choose to invoke conversations with other agents depending on the content of the current message and context. For example:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Hierarchical chat like in ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/optiguide",children:"OptiGuide"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_groupchat.ipynb",children:"Dynamic Group Chat"})," which is a special form of hierarchical chat. In the system, we register a reply function in the group chat manager, which broadcasts messages and decides who the next speaker will be in a group chat setting."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/notebooks/agentchat_groupchat_finite_state_machine",children:"Finite State Machine graphs to set speaker transition constraints"})," which is a special form of dynamic group chat. In this approach, a directed transition matrix is fed into group chat. Users can specify legal transitions or specify disallowed transitions."]}),"\n",(0,a.jsxs)(n.li,{children:["Nested chat like in ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_nested_chats_chess.ipynb",children:"conversational chess"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"LLM-Based Function Call"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Another approach involves LLM-based function calls, where LLM decides if a specific function should be invoked based on the conversation's status during each inference. This approach enables dynamic multi-agent conversations, as seen in scenarios like ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_two_users.ipynb",children:"multi-user math problem solving scenario"}),", where a student assistant automatically seeks expertise via function calls."]}),"\n",(0,a.jsx)(n.h3,{id:"diverse-applications-implemented-with-autogen",children:"Diverse Applications Implemented with AutoGen"}),"\n",(0,a.jsxs)(n.p,{children:["The figure below shows six examples of applications built using AutoGen.\n",(0,a.jsx)(n.img,{alt:"Applications",src:t(50192).A+"",width:"5953",height:"2809"})]}),"\n",(0,a.jsxs)(n.p,{children:["Find a list of examples in this page: ",(0,a.jsx)(n.a,{href:"/autogen/docs/Examples#automated-multi-agent-chat",children:"Automated Agent Chat Examples"})]}),"\n",(0,a.jsx)(n.h2,{id:"for-further-reading",children:"For Further Reading"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Interested in the research that leads to this package? Please check the following papers."})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2308.08155",children:"AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework"}),". Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Shaokun Zhang, Erkang Zhu, Beibin Li, Li Jiang, Xiaoyun Zhang and Chi Wang. ArXiv 2023."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2306.01337",children:"An Empirical Study on Challenging Math Problem Solving with GPT-4"}),". Yiran Wu, Feiran Jia, Shaokun Zhang, Hangyu Li, Erkang Zhu, Yue Wang, Yin Tat Lee, Richard Peng, Qingyun Wu, Chi Wang. ArXiv preprint arXiv:2306.01337 (2023)."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},70089:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_example-a965f253ce7d8e1548ff819e19edc5e4.png"},50192:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/app-c414cd164ef912e5e8b40f61042143ad.png"},55923:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/autogen_agents-b80434bcb15d46da0c6cbeed28115f38.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);