<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Cls\V20201016\Models;
use TencentCloud\Common\AbstractModel;

/**
 * ModifyCosRecharge请求参数结构体
 *
 * @method string getId() 获取COS导入配置ID
 * @method void setId(string $Id) 设置COS导入配置ID
 * @method string getTopicId() 获取日志主题Id
 * @method void setTopicId(string $TopicId) 设置日志主题Id
 * @method string getName() 获取COS导入任务名称
 * @method void setName(string $Name) 设置COS导入任务名称
 * @method integer getEnable() 获取是否启用:   0： 未启用  ， 1：启用
 * @method void setEnable(integer $Enable) 设置是否启用:   0： 未启用  ， 1：启用
 */
class ModifyCosRechargeRequest extends AbstractModel
{
    /**
     * @var string COS导入配置ID
     */
    public $Id;

    /**
     * @var string 日志主题Id
     */
    public $TopicId;

    /**
     * @var string COS导入任务名称
     */
    public $Name;

    /**
     * @var integer 是否启用:   0： 未启用  ， 1：启用
     */
    public $Enable;

    /**
     * @param string $Id COS导入配置ID
     * @param string $TopicId 日志主题Id
     * @param string $Name COS导入任务名称
     * @param integer $Enable 是否启用:   0： 未启用  ， 1：启用
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("Id",$param) and $param["Id"] !== null) {
            $this->Id = $param["Id"];
        }

        if (array_key_exists("TopicId",$param) and $param["TopicId"] !== null) {
            $this->TopicId = $param["TopicId"];
        }

        if (array_key_exists("Name",$param) and $param["Name"] !== null) {
            $this->Name = $param["Name"];
        }

        if (array_key_exists("Enable",$param) and $param["Enable"] !== null) {
            $this->Enable = $param["Enable"];
        }
    }
}
