# list-diff
A web page written in Javascript to compare 2 lists, show the differences

Quarkus is optional as a java webserver.

To build a native quarkus executable app:
1. Reference: https://quarkus.io/guides/building-native-image
2. Download and install GraalVM
   - https://github.com/graalvm/mandrel/releases
   - Set environment variables: JAVA_HOME and GRAALVM_HOME to "C:\soft\mandrel-java17-22.1.0.0-Final"
   - Update environment variable: PATH to add "C:\soft\mandrel-java17-22.1.0.0-Final\bin"
4. Download maven
   - https://maven.apache.org/download.cgi
   - Update environment variable: PATH to add "C:\soft\apache-maven-3.8.5\bin"
5. For windows, Download: Build Tools for Visual Studio 2022 
   - https://visualstudio.microsoft.com/downloads/
   - Update environment variable: PATH to add "C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Tools\MSVC\14.31.31103\bin\Hostx64\x64"
6. Build command: 
   cmd /c 'call "C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Auxiliary\Build\vcvars64.bat" && mvn package -P native'