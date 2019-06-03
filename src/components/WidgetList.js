import React from 'react'

const WidigetList = () =>
                 <div id="main" class="mt-1  border">
                    <form>
                        <div class="row justify-content-between">
                            <h2 class="col-4">Heading Widget</h2>
                            <div class="col-4"></div>
                            <span><i class="arrow fa fa-chevron-down"></i></span>
                            <span><i class="arrow fa fa-chevron-up"></i></span>
                            <div id="headingselect" class="form-group">
                                <select class="form-control">
                                    <option>Heading</option>
                                    <option>List</option>
                                    <option>Image</option>
                                </select>
                            </div>
                            <span><i class="fa fa-times"></i></span>

                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1"></label>
                            <input id="exampleFormControlInput1" class="form-control" type="text"
                                placeholder="Heading text"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect1"></label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput2"></label>
                            <input id="exampleFormControlInput2" class="form-control" type="text"
                                placeholder="Widget name"/>
                        </div>
                        <h3>Preview</h3>
                        <h1>Heading text</h1>
                    </form>

                    <form class="border-top pt-3">
                        <div class="row justify-content-between">

                            <h2 class="col-4">List Widget</h2>
                            <div class="col-4"></div>
                            <span><i class="arrow fa fa-chevron-down"></i></span>
                            <span><i class="arrow fa fa-chevron-up"></i></span>
                            <div id="listSelect" class="form-group">
                                <select class="form-control">
                                    <option>List</option>
                                    <option>Heading</option>
                                    <option>Image</option>
                                    <option>Paragraph</option>
                                </select>
                            </div>
                            <span><i class="fa fa-times"></i></span>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="form-group">
                            <select class="form-control">
                                <option>Unordered list</option>
                                <option>Order List</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <input id="exampleFormControlInput2" class="form-control" type="text"
                                placeholder="Widget name"/>
                        </div>
                        <h3>Preview</h3>
                        <ur>
                            <li>Put each</li>
                            <li>item in</li>
                            <li>a seperate row</li>
                        </ur>
                    </form>

                    <form class="border-top pt-3">
                        <div class="row justify-content-between">

                            <h3 class="col-4">Paragraph Widget</h3>
                            <div class="col-4"></div>
                            <span><i class="arrow fa fa-chevron-down"></i></span>
                            <span><i class="arrow fa fa-chevron-up"></i></span>
                            <div id="listSelect" class="form-group">
                                <select class="form-control">
                                    <option>Paragraph</option>
                                    <option>List</option>
                                    <option>Heading</option>
                                    <option>Image</option>
                                    <option>Link</option>
                                </select>
                            </div>
                            <span><i class="fa fa-times"></i></span>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1"
                                rows="3">Lorem ipsum</textarea>
                        </div>

                        <div class="form-group">
                            <input id="exampleFormControlInput2" class="form-control" type="text"
                                placeholder="Widget name"/>
                        </div>
                        <h3>Preview</h3>
                        <p>Lorem ipsum</p>
                    </form>


                    <form class="border-top pt-3">
                        <div class="row justify-content-between">

                            <h3 class="col-4">Image Widget</h3>
                            <div class="col-4"></div>
                            <span><i class="arrow fa fa-chevron-down"></i></span>
                            <span><i class="arrow fa fa-chevron-up"></i></span>
                            <div id="listSelect" class="form-group">
                                <select class="form-control">
                                    <option>Image</option>
                                    <option>Paragraph</option>
                                    <option>List</option>
                                    <option>Heading</option>
                                    <option>Link</option>
                                </select>
                            </div>
                            <span><i class="fa fa-times"></i></span>
                        </div>


                        <div class="form-group">
                            <input id="exampleFormControlInput2" class="form-control" type="text"
                                placeholder="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
                        </div>
                        <div class="form-group">
                            <input id="exampleFormControlInput2" class="form-control" type="text"
                                placeholder="Widget name"/>
                        </div>
                        <h3>Preview</h3>

                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                            class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"/>
                    </form>


                    <form class="border-top pt-3">
                        <div class="row justify-content-between">

                            <h3 class="col-4">Link Widget</h3>
                            <div class="col-4"></div>
                            <span><i class="arrow fa fa-chevron-down"></i></span>
                            <span><i class="arrow fa fa-chevron-up"></i></span>
                            <div id="listSelect" class="form-group">
                                <select class="form-control">
                                    <option>Link</option>
                                    <option>Image</option>
                                    <option>Paragraph</option>
                                    <option>List</option>
                                    <option>Heading</option>
                                </select>
                            </div>
                            <span><i class="fa fa-times"></i></span>
                        </div>


                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="https://www.youtube.com/user/jannunzi"/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Link text"/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="https://www.youtube.com/user/jannunzi"/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Widget name"/>
                        </div>
                        <h3>Preview</h3>
                        <a href="http://google.com">Link text</a>
                    </form>

                </div>


export default WidigetList