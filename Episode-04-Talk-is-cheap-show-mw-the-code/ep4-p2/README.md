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
