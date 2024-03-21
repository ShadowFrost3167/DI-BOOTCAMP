# NOTES
    #A virtual environment is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages. It's a way to create an isolated environment for Python projects, where you can install packages and dependencies without affecting other projects or the system-wide Python installation. This is particularly useful when you're working on multiple projects that require different versions of packages or even different versions of Python itself.

    #Virtual environments allow you to keep your project's dependencies organized and separate from each other, which helps to avoid conflicts and ensures that each project has access to the specific versions of packages it requires. You can create, activate, deactivate, and delete virtual environments as needed for your projects.

    # One popular tool for managing virtual environments in Python is virtualenv, which is used to create and manage isolated Python environments. Another option is venv, which comes bundled with Python 3 and provides similar functionality to virtualenv. Additionally, there are higher-level tools like pipenv and conda that not only manage virtual environments but also handle package installation and dependency management.



#EXAMPLE
    #In the world of Harry Potter, a virtual environment could be likened to a Pensieve.

    #In the Harry Potter series, a Pensieve is a magical object used to view memories. When a wizard or witch extracts their memories and places them into the Pensieve, they create a sort of isolated environment where those memories can be explored without affecting the present reality. Similarly, a virtual environment in programming creates a contained space where specific versions of libraries and dependencies can be installed and used without interfering with other projects or the system-wide setup.

    #Just as memories in a Pensieve can be revisited, modified, or discarded without impacting the original reality, packages and configurations within a virtual environment can be managed independently for each project, ensuring that dependencies remain organized and projects remain isolated from one another.


# py -m venv nameOfEnvironment
#go to locaton of nameOfEnvironment

import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

