---
layout: page
title: Making A Simple Subtractive Synthesizer Plugin With JUCE - Part 1
excerpt: "Package installation and setup"
categories: articles
modified: 2015-05-03
comments: true
share: true
---

Writing a software synth or effects processor is a formidable task for beginners because it requires knowledge in many areas:

* <strong>Programming</strong>: As far as I know, most commercial plugins are written in C/C++. Of course, you can always write plugins in other languages such as Python, Java(Script) etc. If you want to create a full-fledged commercial class VST, you may need to familiarize yourself with several programming libraries, APIs, and markup languages.

* <strong>DSP</strong>: Even if you know how to code, you cannot write an audio plugin without some understanding of digital signal processing (DSP). Software plugins inherently deal with digital signals, thus DSP is essential. Knowledge of signals in the analog domain may also be required for writing analog modeled software.

* <strong>Math</strong>: If you are writing something elaborate, the math can get pretty gnarly. Doesn't hurt to know some complex analysis, linear algebra, calculus, differential equations, and so on.

* <strong>Music</strong>: Developing a good audio plugin isn't all technical. It is after all, going to be used by musicians, producers, and engineers with various backgrounds and skill sets. Music theory as well as practical musical skills will always come in handy.

* <strong>Design</strong>: Finally, a great software synth can be ruined by a horrible graphical user interface (GUI). You want it to be simultaneously pleasing to the eye and easy to use without sacrificing functionality. Achieving a good balance is key.

# Intended Audience

Before we move forward with the tutorial, I want to clarify that I'm not an expert programmer . In fact, this tutorial is based on my first VST plugin that I ever wrote (I want to apologize beforehand for potentially crappy coding practices). Therefore, this tutorial assumes your starting point is similar to when I first started writing my first plugin:

* You've done some programming, but you need a bit of guidance turning code into a working audio plugin.

* Seasoned musician/producer, but little to no programming experience.

* You have a technical background and a lot of love for music, but not a lot of practical experience in music production.

One more thing. Not surprisingly, there are other great ways to create audio plugins. The following is a non-exhaustive list of different frameworks for creating audio plugins (and much more). 

* [Synthedit](http://www.synthedit.com/)

* [Rackafx by will pirkle](http://www.willpirkle.com/rackafx/) 

* [Max by cycling'74](https://cycling74.com/products/max/) 

* [Port audio](http://www.portaudio.com/)

* [Processing](https://processing.org/)

* [Native instrument's reaktor](http://www.native-instruments.com/en/products/komplete/synths/reaktor-5/)

* [Openframeworks](http://openframeworks.cc/)

# What I hope you will get out of this tutorial

So you've decided to go down the rabbit hole. Here are some things which I hope you get out of this tutorial. 

* A fully functional VST software synth plugin written in C++ that will work in a DAW that supports VST plugins.

* A deeper understanding of "what's under the hood" e.g., what's actually happening when you turn that decay knob.

* A better appreciation for graphical layout and how design affects music creation/performance and vice versa.

# Package Installation

There's 3 things we need to install before we can start to program.

1.[Steinberg SDK](http://www.steinberg.net/en/company/developers.html) (get the audio VST plugin SDK). I put the SDK files in a folder at C:/VST3 SDK. 

<figure>
  <!-- <a href="/images/vstsdk.png"> -->
  <img src = "/images/vstsdk.png" alt="image">
  </a>
</figure>
2.[JUCE](http://www.juce.com/download) (I'm using windows so I downloaded JUCE for windows). I put the JUCE files in a folder at C:/JUCE

<figure>
  <!-- <a href="/images/juce.png"> -->
  <img src = "/images/juce.png" alt="image">
  </a>
</figure>
3.[Visual Studio](https://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx) (I use the VS express 2013 windows desktop version). Use the installer to install the package.

<figure>
  <!-- <a href="/images/visualstudio.png"> -->
  <img src = "/images/visualstudio.png" alt="image">
</figure>

Optionally, you can install a DAW and a text editor of your choice to edit the code (I use sublime text). The DAW is almost mandatory because we will be testing our VST plugin in the DAW (I use ableton 8/9), however if you don't care about testing your code in the DAW it's not required.

# Setup

Once you've finished the installation processes, fire up JUCE. You should see something like this (Figure 1). Click on the audio plugin box since we're writing an audio plugin.

<figure>
  <!-- <a href="/images/visualstudio.png"> -->
  <img src = "/images/introjucer.png" alt="image">
  </a>
  <caption>
  Figure 1: Introjucer window when you first open JUCE.
  </caption>
</figure>

You'll be slided over to a second window (not shown). Here, fill in the <strong> project name </strong>, <strong> project type </strong>, and specify our <strong>project folder</strong>. The <strong>Target Platforms </strong> is a list of all the IDEs with which JUCE can interface. I'm going to be using visual studio 2013. If you are using mac or linux, you want to choose something else like code blocks or xcode. Click create. 

 You should now be looking at the <strong> Project Settings </strong> window.

<figure>
  <!-- <a href="/images/visualstudio.png"> -->
  <img src = "/images/project_settings.png" alt="image">
  </a>
  <caption>
  Figure 2: 
  </caption>
</figure>

For this tutorial, many of the parameters in the project settings can be left blank. I filled in the <strong>Project Name</strong>, <strong>Project Version</strong>, <strong>Plugin Code</strong>, and deleted most everything else. Specify the <strong> Project Type</strong> as an Audio plugin. We will only be building a VST. <strong> Plugin Channel Configuration </strong> can be left as {1,1,}, {2,2,} (1 in 1 out, 2 in 2out). This plugin <strong>is a synth</strong>, <strong>wants midi input</strong>, and <strong>silence in should produce silence out</strong>. Include the binary data file in the appconfig.h file.

Let's shift our attention to the tabs on the left. For this tutorial, we can get away without touching the <strong> Modules </strong> tab. In short, the modules tab allows us to specify what modules we want to use in our project. We certainly won't be needing all the modules for our simple synth and at this point in the tutorial, we really don't need to be optimizing our modules setup, so it's best that we leave this section as is. The tab below modules is the <strong>  Visual Studio 2013 </strong> tab. There's generally not much to do here either, however a crucial entry is the <strong> VST Folder</strong>, which specifies where JUCE/visual studio will look for the VST SDK files. Remember where you put the SDK files? (I put mine in C:/VST3 SDK)

<figure>
  <!-- <a href="/images/visualstudio.png"> -->
  <img src = "/images/visual_studio.png" alt="image">
  </a>
</figure>

Finally, go to <strong> Debug </strong>. It should look something like this. If you plan on building a 64-bit VST plugin, modify <strong> Architecture </strong> to x64. Otherwise, leave it as 32-bit.

<figure>
  <!-- <a href="/images/visualstudio.png"> -->
  <img src = "/images/debug.png" alt="image">
  </a>
</figure>

After you've entered all the relevant information, click on the <strong>Save Project and Open in Visual Studio</strong> button located at the bottom left corner of the window. As the button says, this will save the project in your project file and open up visual studio for you. 

<figure>
  <!-- <a href="/images/visualstudio.png"> -->
  <img src = "/images/visual_studio_JUCE.png" alt="image">
  </a>
</figure>

When visual studio finishes loading all the files, right click on the solution file (mine says Your First Audio Plugin) and click <strong>Build</strong>, which should then run the visual studio compiler. You should get several warning messages; ignore them. If the compiler didn't find any errors in the code (it shouldn't), then you will get a message that states, "Build: 1 succeeded." Hurray! You just built your first VST plugin! Open your favorite DAW and check it out. If you're using Ableton, you need to rescan the project file in which the .dll file is located. If done correctly, you should be able to launch the VST in your DAW just like any other VST. You should see the words "Hello World!" in black, centered inside the window with a white background.

<figure>
  <!-- <a href="/images/visualstudio.png"> -->
  <img src = "/images/first_plugin.png" alt="image">
  </a>
</figure>

Excited? I know I was when I first started. If it was a bit underwhelming don't worry, we're just getting started. In the next part of the tutorial, I'll show you how to create a simple volume knob using JUCE's powerful component class.  