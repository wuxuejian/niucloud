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
namespace TencentCloud\Cvm\V20170312\Models;
use TencentCloud\Common\AbstractModel;

/**
 * CreateHpcCluster请求参数结构体
 *
 * @method string getZone() 获取可用区。
 * @method void setZone(string $Zone) 设置可用区。
 * @method string getName() 获取高性能计算集群名称。
 * @method void setName(string $Name) 设置高性能计算集群名称。
 * @method string getRemark() 获取高性能计算集群备注。
 * @method void setRemark(string $Remark) 设置高性能计算集群备注。
 */
class CreateHpcClusterRequest extends AbstractModel
{
    /**
     * @var string 可用区。
     */
    public $Zone;

    /**
     * @var string 高性能计算集群名称。
     */
    public $Name;

    /**
     * @var string 高性能计算集群备注。
     */
    public $Remark;

    /**
     * @param string $Zone 可用区。
     * @param string $Name 高性能计算集群名称。
     * @param string $Remark 高性能计算集群备注。
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
        if (array_key_exists("Zone",$param) and $param["Zone"] !== null) {
            $this->Zone = $param["Zone"];
        }

        if (array_key_exists("Name",$param) and $param["Name"] !== null) {
            $this->Name = $param["Name"];
        }

        if (array_key_exists("Remark",$param) and $param["Remark"] !== null) {
            $this->Remark = $param["Remark"];
        }
    }
}
