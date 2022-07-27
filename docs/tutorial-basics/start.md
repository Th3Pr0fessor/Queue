---
sidebar_position: 1
---

# Getting Started

This tutorial shows you how you can set up Queue and teaches you a basic implementation of the module.

## Installation

Get the module from the [Roblox library](https://www.roblox.com/library/9041187417/Queue)

<!-- or get the [latest release](https://github.com/00xima/RBLX-SimplePath/releases) from GitHub. -->

> **_NOTE:_**
> For the purposes of the tutorial, the script assumes the module script is in `game.ReplicatedStorage`; For security purposes it would be best if placed `game.ReplicatedStorage` .

After you insert the module to your place, add a new script to `game.ReplicatedStorage` and paste the folowing code to start using the module:

```lua
--Import the module so you can start using it
local ServerScriptService = game:GetService("ReplicatedStorage")
local Queue = require(ServerScriptService.Queue)
```

The next part of the code defines all of the different methods of usage:

```lua
local Queue = require(game.ReplicatedStorage.Queue) -- Requiring Module
local TestQueue = Queue.new() -- Creating a new Queue

local function HelloWorld() -- Example Function
    print('Hello World')
end

TestQueue:Enqueue(HelloWorld, 2) -- prints Hello World with a 2 second wait after execution

```

> **_NOTE:_** `Queue.new()` is a constructor that initializes a new Enemy and it should only be initialized once per enemy.
