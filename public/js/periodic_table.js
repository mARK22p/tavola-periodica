// periodic_table.js - version 0.2 - Spry Pre-Release 1.6.1
//
// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

Spry.Utils.hasClassName = function (ele, className)
{
	if (!ele || !className)
		return false;

	if (!ele.className)
	{
		ele.className = '';
		return false;
	}

	return ele.className.search(new RegExp("\\s*\\b" + className + "\\b")) != -1;
};

function GrayOutTable(activeClass)
{
	var rows = ds1.getData(true);
	var numRows = rows.length;
	Spry.$$('.elementBlock', 'wholeContainer').forEach(
			function(ele){
				if (!Spry.Utils.hasClassName(ele, activeClass))
					Spry.Utils.addClassName(ele,"grayOut");
				else
					Spry.Utils.removeClassName(ele,"grayOut");
			}		
	);
};

function clearGray()
{
	var rows = ds1.getData(true);
	var numRows = rows.length;
	Spry.$$('.elementBlock', 'wholeContainer').forEach(
			function(ele){
				if (Spry.Utils.hasClassName(ele, "grayOut"))
					Spry.Utils.removeClassName(ele,"grayOut");
			}		
	);
};

// Place a class on the document node that triggers our data source to be hidden.
// This will avoid the flashing of content before the HTMLDataSet has processed
// it.

try { document.documentElement.className = "jsEnabled" } catch(e) {}
