/*
 * Copyright 2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cache = ripple('platform/webworks.core/2.0.0/fsCache'),
    dir = ripple('platform/webworks.core/2.0.0/server/io/dir'),
    utils = ripple('utils'),
    _self = {};

function _packet(data) {
    return {
        code: 1,
        data: data
    };
}

utils.mixin({
    getFreeSpaceForRoot: function (get, post) {
        return _packet(cache.dir.getFreeSpaceForRoot(post.path));
    },
    getRootDirs: function () {
        return _packet(cache.dir.getRootDirs());
    }
}, _self);

utils.mixin(dir, _self);

module.exports = _self;
