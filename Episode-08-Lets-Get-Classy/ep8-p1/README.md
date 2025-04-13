# Namste React 🚀

"parcel": "^2.13.3"
^(caret) used here because, if there is a new version(minor upgrade) came (2.13.4), parcel will automatically updated to that version.
~(tilda) if we use ~, it will updated to a major version automatically.
Always it is safe to put caret(^);

# Parcel

-Dev Build
-Local server
-HMR(hot module replacement)-automatically refreshing
-File watching algorithm-witten in c++ -it keeps a track on everything we do in the project.
-Give faster Build- Caching
-.parcel-cache = parcel will caching everything we do and it gives faster build.
-Image Optimization
-Minification - it will minify the code on production
-Bundling
-Compressing
-Consistent Hashing
-Code spliting
-DIfferential Bundling - To support older browsers
-Diagnostic
-Error Handling
-HTTPs- Parcel also help us to host in HTTPs
-Tree SHaking- remove unused code
-Different dev and prod bundles

# run production build

npx parcel build index.html
dist folder contain all the production code and the running code is comming from dist

# "start":"parcel index.html"

run in dev

# "build":"parcel build index.html"

run in prod

# Namaste Food

/\*\*

- -
- @returns
- Header
- -Logo
- -Nav Item
- Body
- -search
- -Resturand container
- -Resturand Card
-      -Img
-      -Name of resturand, star rating, cusine, delivery time
- Footer
- -Copyright
- - Links
- -Address
- -Contact
  \*/

  Two types of Export/Import

  -Default Export/Import

  export default Components
  import Components from "path"

  -Named Export/Import

  export const Components
  iport {Components} from "path"

# React Hooks

- Normal JS utility functions
- useState()- this gives us superpowerfull react variables
  -useEffect()

When ever a state variable updates react rerebders the components

# 2 types of Routing in web app

- Client side Routing
- Server side Routing

"https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9966135&lng=77.5920581&str=food&trackingId=332b900d-769c-ef2c-e880-c15159ec20fb&submitAction=ENTER&queryUniqueId=8bf8545f-0e09-237c-c208-d322b73c9efd"
