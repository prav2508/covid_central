import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {formatDate} from '../etc/common';
import * as Icon from 'react-feather'

function Newsfeed() {

    const [newsdata, setNewsdata] = useState([])

    /**
    * Changes XML to JSON
    * @param {string} xml XML DOM tree
    */
    function xmlToJson(xml) {
        
        var obj = {};

        if (xml.nodeType === 1) {
           
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType === 3) {
            
            obj = xml.nodeValue;
        }

        
        var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
            return node.nodeType === 3;
        });
        if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
            obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
                return text + node.nodeValue;
            }, "");
        } else if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof obj[nodeName] == "undefined") {
                    obj[nodeName] = xmlToJson(item);
                } else {
                    if (typeof obj[nodeName].push == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(xmlToJson(item));
                }
            }
        }
        return obj;
    }


    useEffect(() => {
        var text, parser, xmlDoc,converted_data;
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(text, "text/xml");
        axios.get('https://www.who.int/rss-feeds/news-english.xml')
            .then(res => {
                xmlDoc = parser.parseFromString(res.data, "text/xml");
                //var x = xmlDoc.getElementsByTagName("item")
                 converted_data = xmlToJson(xmlDoc);
                setNewsdata(converted_data.rss.channel.item)
            }).catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div className="container-fluid">
            <h1 className="display-3">News Feed</h1>
            <div className="row-fluid">
                <div className="card">
                    <div className="card-header">
                       <span className="float-left" >
                     <img className="" src="https://logos-download.com/wp-content/uploads/2016/12/World_Health_Organization_logo_logotype.png" alt="Who logo" style={{ width: "120px", height: "35px" }} />
                     </span>
                    </div>
                    <div className="card-body">
                        {
                            newsdata.map((item,i) => (
                                <div className="p-2" key={i}>
                                    <div className="card">
                                        <div className="card-body news-feed">
                                            <div className="row">
                                                <div className="col-sm">
                                        <span className="float-left lead">
                                
                                            <a className="news-header" href={item.link} target="_blank"><b><strong>{item.title} </strong></b></a><Icon.ExternalLink/>
                                            </span>
                                            </div>
                                            <div className="col-sm">
                                            <span className="float-right text-muted ">
                                                <small>Date - {formatDate(item.pubDate)} </small>
                                            </span>
                                            </div>
                                            </div>
                                            <br/>
                                            <hr/>
                                            <p dangerouslySetInnerHTML={{__html: item.description}} >
                                
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsfeed