"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6056],{61892:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(74848),t=r(28453);const o={sidebar_label:"requests_markdown_browser",title:"browser_utils.requests_markdown_browser"},i=void 0,a={id:"reference/browser_utils/requests_markdown_browser",title:"browser_utils.requests_markdown_browser",description:"RequestsMarkdownBrowser",source:"@site/docs/reference/browser_utils/requests_markdown_browser.md",sourceDirName:"reference/browser_utils",slug:"/reference/browser_utils/requests_markdown_browser",permalink:"/autogen/docs/reference/browser_utils/requests_markdown_browser",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/browser_utils/requests_markdown_browser.md",tags:[],version:"current",frontMatter:{sidebar_label:"requests_markdown_browser",title:"browser_utils.requests_markdown_browser"},sidebar:"referenceSideBar",previous:{title:"playwright_markdown_browser",permalink:"/autogen/docs/reference/browser_utils/playwright_markdown_browser"},next:{title:"selenium_markdown_browser",permalink:"/autogen/docs/reference/browser_utils/selenium_markdown_browser"}},d={},l=[{value:"RequestsMarkdownBrowser",id:"requestsmarkdownbrowser",level:2},{value:"__init__",id:"__init__",level:3},{value:"address",id:"address",level:3},{value:"set_address",id:"set_address",level:3},{value:"viewport",id:"viewport",level:3},{value:"page_content",id:"page_content",level:3},{value:"page_down",id:"page_down",level:3},{value:"page_up",id:"page_up",level:3},{value:"find_on_page",id:"find_on_page",level:3},{value:"find_next",id:"find_next",level:3},{value:"visit_page",id:"visit_page",level:3},{value:"open_local_file",id:"open_local_file",level:3}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"requestsmarkdownbrowser",children:"RequestsMarkdownBrowser"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class RequestsMarkdownBrowser(AbstractMarkdownBrowser)\n"})}),"\n",(0,s.jsx)(n.p,{children:"(In preview) An extremely simple Python requests-powered Markdown web browser.\nThis browser cannot run JavaScript, compute CSS, etc. It simply fetches the HTML document, and converts it to Markdown.\nSee AbstractMarkdownBrowser for more details."}),"\n",(0,s.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __init__(start_page: Optional[str] = None,\n             viewport_size: Optional[int] = 1024 * 8,\n             downloads_folder: Optional[Union[str, None]] = None,\n             search_engine: Optional[Union[AbstractMarkdownSearch,\n                                           None]] = None,\n             markdown_converter: Optional[Union[MarkdownConverter,\n                                                None]] = None,\n             requests_session: Optional[Union[requests.Session, None]] = None,\n             requests_get_kwargs: Optional[Union[Dict[str, Any],\n                                                 None]] = None)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Instantiate a new RequestsMarkdownBrowser."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start_page"}),' - The page on which the browser starts (default: "about:blank")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"viewport_size"})," - Approximately how many ",(0,s.jsx)(n.em,{children:"characters"})," fit in the viewport. Viewport dimensions are adjusted dynamically to avoid cutting off words (default: 8192)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"downloads_folder"})," - Path to where downloads are saved. If None, downloads are disabled. (default: None)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"search_engine"})," - An instance of MarkdownSearch, which handles web searches performed by this browser (default: a new ",(0,s.jsx)(n.code,{children:"BingMarkdownSearch()"})," with default parameters)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"markdown_converted"})," - An instance of a MarkdownConverter used to convert HTML pages and downloads to Markdown (default: a new ",(0,s.jsx)(n.code,{children:"MarkdownConerter()"})," with default parameters)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"request_session"})," - The session from which to issue requests (default: a new ",(0,s.jsx)(n.code,{children:"requests.Session()"})," instance with default parameters)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"request_get_kwargs"})," - Extra parameters passed to evert ",(0,s.jsx)(n.code,{children:".get()"})," call made to requests."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"address",children:"address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@property\ndef address() -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return the address of the current page."}),"\n",(0,s.jsx)(n.h3,{id:"set_address",children:"set_address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def set_address(uri_or_path: str) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the address of the current page.\nThis will result in the page being fetched via the underlying requests session."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uri_or_path"})," - The fully-qualified URI to fetch, or the path to fetch from the current location. If the URI protocol is ",(0,s.jsx)(n.code,{children:"search:"}),", the remainder of the URI is interpreted as a search query, and a web search is performed. If the URI protocol is ",(0,s.jsx)(n.code,{children:"file://"}),", the remainder of the URI is interpreted as a local absolute file path."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"viewport",children:"viewport"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@property\ndef viewport() -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return the content of the current viewport."}),"\n",(0,s.jsx)(n.h3,{id:"page_content",children:"page_content"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@property\ndef page_content() -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return the full contents of the current page."}),"\n",(0,s.jsx)(n.h3,{id:"page_down",children:"page_down"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def page_down() -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Move the viewport down one page, if possible."}),"\n",(0,s.jsx)(n.h3,{id:"page_up",children:"page_up"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def page_up() -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Move the viewport up one page, if possible."}),"\n",(0,s.jsx)(n.h3,{id:"find_on_page",children:"find_on_page"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def find_on_page(query: str) -> Union[str, None]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Searches for the query from the current viewport forward, looping back to the start if necessary."}),"\n",(0,s.jsx)(n.h3,{id:"find_next",children:"find_next"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def find_next() -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Scroll to the next viewport that matches the query"}),"\n",(0,s.jsx)(n.h3,{id:"visit_page",children:"visit_page"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def visit_page(path_or_uri: str) -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Update the address, visit the page, and return the content of the viewport."}),"\n",(0,s.jsx)(n.h3,{id:"open_local_file",children:"open_local_file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def open_local_file(local_path: str) -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Convert a local file path to a file:/// URI, update the address, visit the page, and return the contents of the viewport."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(96540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);