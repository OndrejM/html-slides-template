# Run the reveal.js slides in a browser (without the Netbeans connector) and specify the URL variable
#######################################################################################################

#URL=http://localhost:8383/slides/index.html#/
URL=file:///home/omihalyi/workspaces/Presentations/Reactive%20MicroProfile/slides/index.html#/
OUTPUT_FILE="Ondrej Mihalyi - Be Reactive and Micro with a MicroProfile Stack.pdf"

decktape-1.0.0/phantomjs decktape-1.0.0/decktape.js automatic $URL slides.pdf